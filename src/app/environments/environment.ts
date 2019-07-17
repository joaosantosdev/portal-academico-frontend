import { Environment } from "./environment.model";

export const ENV: Environment = {
    production: false,
    authentication: {
       accessTokenName: "access_token",
        profileKeyName: "profile"
    },
    webServices: {
        portalService: {
            baseUrl: "http://localhost/sistema-educacional/web/",
            grant_type: "password",
           client_id: "j4rhZNqOKW7emCZwoOdiN5O9BGHEeXbl"
        }
    }
};
