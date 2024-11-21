import { useContext } from 'preact/hooks';
import { TranslationContext } from '../../../shared/components/TranslationsProvider.js';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import json from '../src/locales/en/newtab.json';
import { createContext } from 'preact';

/**
 * @import { InitialSetupResponse } from "../../../types/new-tab.js";
 */

/**
 * This is a wrapper to only allow keys from the default translation file
 * @type {() => { t: (key: keyof json, replacements?: Record<string, string>) => string }}
 */
export function useTypedTranslation() {
    return {
        t: useContext(TranslationContext).t,
    };
}

export const MessagingContext = createContext(/** @type {import("../src/js/index.js").NewTabPage} */ ({}));
export const useMessaging = () => useContext(MessagingContext);
export const TelemetryContext = createContext(
    /** @type {import("./telemetry/telemetry.js").Telemetry} */ ({
        measureFromPageLoad: () => {},
    }),
);
export const useTelemetry = () => useContext(TelemetryContext);

export const InitialSetupContext = createContext(/** @type {InitialSetupResponse} */ ({}));
export const useInitialSetupData = () => useContext(InitialSetupContext);
