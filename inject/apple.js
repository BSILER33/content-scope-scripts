/**
 * @module Apple integration
 * @category Content Scope Scripts Integrations
 */
import { load, init } from '../src/content-scope-features.js'
import { processConfig, isGloballyDisabled } from './../src/utils'
import { isTrackerOrigin } from '../src/trackers'
import { WebkitMessagingConfig, TestTransportConfig } from '../packages/messaging/index.js'

function initCode () {
    // @ts-expect-error https://app.asana.com/0/1201614831475344/1203979574128023/f
    const config = $CONTENT_SCOPE$
    // @ts-expect-error https://app.asana.com/0/1201614831475344/1203979574128023/f
    const unprotected = $USER_UNPROTECTED_DOMAINS$
    // @ts-expect-error https://app.asana.com/0/1201614831475344/1203979574128023/f
    const preferences = $USER_PREFERENCES$

    // example of additions to remote config
    config.features.messageProxy = {
        exceptions: [],
        state: 'enabled',
        settings: {}
    }

    // example of additions to the platform-provided config
    preferences.messageProxies = [
        {
            origin: 'youtube-nocookie.com',
            feature: 'duckPlayerPage'
        }
    ]

    const processedConfig = processConfig(config, unprotected, preferences)
    if (isGloballyDisabled(processedConfig)) {
        return
    }

    if (import.meta.injectName === 'apple-isolated') {
        processedConfig.messagingConfig = new WebkitMessagingConfig({
            webkitMessageHandlerNames: ['contentScopeScriptsIsolated'],
            secret: '',
            hasModernWebkitAPI: true
        })
    } else {
        processedConfig.messagingConfig = new TestTransportConfig({
            notify () {
                // noop
            },
            request: async () => {
                // noop
            },
            subscribe () {
                return () => {
                    // noop
                }
            }
        })
    }

    load({
        platform: processedConfig.platform,
        trackerLookup: processedConfig.trackerLookup,
        documentOriginIsTracker: isTrackerOrigin(processedConfig.trackerLookup),
        site: processedConfig.site,
        bundledConfig: processedConfig.bundledConfig,
        messagingConfig: processedConfig.messagingConfig
    })

    init(processedConfig)

    // Not supported:
    // update(message)
}

initCode()
