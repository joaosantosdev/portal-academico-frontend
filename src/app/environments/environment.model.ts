export interface Environment {
    production: boolean;
    authentication: {
        accessTokenName: string,
        profileKeyName: string
    };
    webServices: {
        [nomeServico: string]: {
            baseUrl: string,
            grant_type: string,
            client_id: string
        }
    };
}
