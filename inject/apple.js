/**
 * @module Apple integration
 * @category Content Scope Scripts Integrations
 */
import { load, init } from '../src/content-scope-features.js'
import { processConfig, isGloballyDisabled } from './../src/utils'
import { isTrackerOrigin } from '../src/trackers'
import { WebkitMessagingConfig } from '../packages/messaging/index.js'

function initCode () {
    // @ts-expect-error https://app.asana.com/0/1201614831475344/1203979574128023/f
    const processedConfig = processConfig($CONTENT_SCOPE$, $USER_UNPROTECTED_DOMAINS$, $USER_PREFERENCES$)
    if (isGloballyDisabled(processedConfig)) {
        return
    }

    load({
        platform: processedConfig.platform,
        trackerLookup: processedConfig.trackerLookup,
        documentOriginIsTracker: isTrackerOrigin(processedConfig.trackerLookup),
        site: processedConfig.site,
        bundledConfig: processedConfig.bundledConfig,
        constructMessagingConfig: (context) => {
            if (import.meta.injectName !== 'apple-isolated') throw new Error('Only apple-isolated messaging supported')
            return new WebkitMessagingConfig({
                webkitMessageHandlerNames: [context.context],
                secret: '',
                hasModernWebkitAPI: true
            })
        }
    })

    init(processedConfig)

    // Not supported:
    // update(message)
}

initCode()
