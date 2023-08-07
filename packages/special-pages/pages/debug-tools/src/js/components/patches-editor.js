import {
    FeatureToggleListGlobal
} from '../remote-resources/components/feature-toggle-list-global'
import { FeatureToggleListDomainExceptions } from '../remote-resources/components/feature-toggle-list-domain-exceptions'
import { UnprotectedDomains } from '../remote-resources/components/unprotected-domains'
import jsonpatch from 'fast-json-patch'
import { MonacoEditorRaw } from './monaco-editor'
import * as monaco from 'monaco-editor'
import useConstant from '@xstate/react/es/useConstant'
import { DD, DT, InlineDL } from './definition-list'
import { MicroButton } from './micro-button'
import { useEffect } from 'react'

/**
 * @typedef {import('../../../schema/__generated__/schema.types').RemoteResource} RemoteResource
 * @typedef {import('../../../schema/__generated__/schema.types').UpdateResourceParams} UpdateResourceParams
 * @typedef {import('../remote-resources/remote-resources.machine').ToggleKind} ToggleKind
 * @typedef {import('../types').TabWithHostname} TabWithHostname
 * @typedef {import('monaco-editor').editor.ITextModel} ITextModel
 * @typedef {import('react').ReactNode} ReactNode
 */

/**
 * @typedef ToggleComponentProps
 * @property {ITextModel} model
 */

/** @type {Record<ToggleKind, string>} */
const titles = {
    'global-feature': 'Global Feature Toggles',
    'domain-exceptions': 'Domain Exceptions',
    unprotected: 'Unprotected Domains'
}

/** @type {Record<ToggleKind, (props: ToggleComponentProps) => ReactNode>} */
const components = {
    'global-feature': (props) => <FeatureToggleListGlobal {...props}/>,
    // 'domain-exceptions': (props) => <FeatureToggleListDomainExceptions {...props} />
    'domain-exceptions': (props) => <FeatureToggleListDomainExceptions {...props} />,
    unprotected: (props) => <UnprotectedDomains {...props} />
}

/**
 * @param {object} props
 * @param {ITextModel} props.model
 * @param {boolean} props.pending
 * @param {boolean} props.edited
 * @param {boolean} props.invalid
 * @param {RemoteResource} props.resource
 * @param {ReactNode} props.buttons
 */
export function PatchesEditor (props) {
    /**
     * Share a text model between the views
     * @type {monaco.editor.ITextModel}
     */
    const patchModel = useConstant(() => {
        const model = monaco.editor.createModel(
            '[]',
            'json'
        )

        // @ts-expect-error - runtime testing
        window._patch_editor_value = () => model.getValue()
        // @ts-expect-error - runtime testing
        window._patch_editor_set_value = (value) => {
            model.setValue(value)
        }
        return model
    })

    useEffect(() => {
        const sub = patchModel.onDidChangeContent(() => {
            console.log('v->', patchModel.getValue())
        })
        return () => {
            sub.dispose()
        }
    }, [patchModel])

    function storeLocally () {
        localStorage.setItem('__unstable_patch_store_local_' + props.resource.id, patchModel.getValue())
    }

    function restoreFromLocal () {
        const item = localStorage.getItem('__unstable_patch_store_local_' + props.resource.id)
        if (item) {
            patchModel.setValue(item)
        }
    }

    function applyPatch () {
        const a = JSON.parse(props.resource.current.contents)
        const b = JSON.parse(patchModel.getValue())
        const next = jsonpatch.applyPatch(a, b).newDocument
        props.model.setValue(JSON.stringify(next, null, 4))
    }

    function generateFromDiff () {
        const input = JSON.parse(props.resource.current.contents)
        const current = JSON.parse(props.model.getValue())
        const diff = jsonpatch.compare(input, current)
        patchModel.setValue(JSON.stringify(diff, null, 4))
    }

    return (
        <div data-testid="PatchesEditor">
            <div className="editor__save">
                {props.buttons}
            </div>
            <div className="row card">
                <InlineDL>
                    <DT>GENERATE</DT>
                    <DD><MicroButton className="ml-3.5" onClick={generateFromDiff}>from diff 🔀</MicroButton></DD>
                </InlineDL>
                <InlineDL>
                    <DT>STORAGE</DT>
                    <DD>
                        <MicroButton className="ml-3.5" onClick={storeLocally}>store patch locally 💿</MicroButton>
                        <MicroButton className="ml-3.5" onClick={restoreFromLocal}>restore local ↪️</MicroButton>
                        <MicroButton className="ml-3.5" onClick={applyPatch}>apply patch ✅</MicroButton>
                    </DD>
                </InlineDL>
            </div>
            <div className="row">
                <MonacoEditorRaw model={patchModel} />
            </div>
        </div>
    )
}
