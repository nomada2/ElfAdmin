import { LogLevel, Configuration, BrowserCacheLocation } from '@azure/msal-browser';

export const msalConfig: Configuration = {
    auth: {
        clientId: 'ecfbb89d-9f5a-4914-939a-bf4800630581',
        authority: 'https://login.microsoftonline.com/1f4e3112-81fc-4f46-81fd-5c37ac107e26',
        redirectUri: '/',
    },
    cache: {
        cacheLocation: BrowserCacheLocation.LocalStorage,
        storeAuthStateInCookie: false,
    },
    system: {
        loggerOptions: {
            loggerCallback(logLevel: LogLevel, message: string) {
                console.log(message);
            },
            logLevel: LogLevel.Verbose,
            piiLoggingEnabled: false
        }
    }
}

export const protectedResources = {
    linkApi: {
        endpoint: "https://localhost:7096/api/link",
        scopes: ["api://a439e578-3ff8-4bee-91e5-96141234bc67/access_as_user"],
    },
    reportApi: {
        endpoint: "https://localhost:7096/api/report",
        scopes: ["api://a439e578-3ff8-4bee-91e5-96141234bc67/access_as_user"],
    }
}

export const loginRequest = {
    scopes: []
};