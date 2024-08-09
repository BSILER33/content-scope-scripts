export class Settings {
    /**
     * @param {object} params
     * @param {{name: ImportMeta['platform']}} [params.platform]
     * @param {{state: 'enabled' | 'disabled'}} [params.pip]
     * @param {{state: 'enabled' | 'disabled'}} [params.autoplay]
     * @param {{state: 'enabled' | 'disabled'}} [params.focusMode]
     */
    constructor ({
        platform = { name: 'macos' },
        pip = { state: 'disabled' },
        autoplay = { state: 'enabled' },
        focusMode = { state: 'enabled' }
    }) {
        this.platform = platform
        this.pip = pip
        this.autoplay = autoplay
        this.focusMode = focusMode
    }

    /**
     * @param {keyof import("../../../types/duckplayer").DuckPlayerPageSettings} named
     * @param {{state: 'enabled' | 'disabled'} | null | undefined} settings
     * @return {Settings}
     */
    withFeatureState (named, settings) {
        if (!settings) return this
        /** @type {(keyof import("../../../types/duckplayer").DuckPlayerPageSettings)[]} */
        const valid = ['pip', 'autoplay']
        if (!valid.includes(named)) return this

        if (settings.state === 'enabled' || settings.state === 'disabled') {
            return new Settings({
                ...this,
                [named]: settings
            })
        }
        return this
    }

    withPlatformName (name) {
        /** @type {ImportMeta['platform'][]} */
        const valid = ['windows', 'macos', 'ios', 'android']
        if (valid.includes(/** @type {any} */(name))) {
            return new Settings({
                ...this,
                platform: { name }
            })
        }
        return this
    }

    /**
     * @param {boolean} condition
     * @return {Settings}
     */
    withDisabledFocusMode (condition) {
        /** @type {ImportMeta['platform'][]} */
        return new Settings({
            ...this,
            focusMode: {
                state: condition
                    ? 'disabled'
                    : 'enabled'
            }
        })
    }

    /**
     * @return {string}
     */
    get youtubeBase () {
        switch (this.platform.name) {
        case 'windows':
        case 'ios':
        case 'android': {
            return 'duck://player/openInYoutube'
        }
        case 'macos': {
            return 'https://www.youtube.com/watch'
        }
        default: throw new Error('unreachable')
        }
    }

    /**
     * @return {'desktop' | 'mobile'}
     */
    get layout () {
        switch (this.platform.name) {
        case 'windows':
        case 'macos': {
            return 'desktop'
        }
        case 'ios':
        case 'android': {
            return 'mobile'
        }
        default: return 'desktop'
        }
    }

    /**
     * @return {'desktop' | 'portrait' | 'landscape'}
     */
    get orientation () {
        switch (this.platform.name) {
        case 'windows':
        case 'macos': {
            return 'desktop'
        }
        case 'ios':
        case 'android': {
            return 'portrait'
        }
        default: return 'desktop'
        }
    }
}
