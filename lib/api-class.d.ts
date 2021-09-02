import { getFileApi, getFileNodesApi, getImageApi, getImageFillsApi, getCommentsApi, postCommentsApi, deleteCommentsApi, getUserMeApi, getVersionsApi, getTeamProjectsApi, getProjectFilesApi, getTeamComponentsApi, getFileComponentsApi, getComponentApi, getTeamComponentSetsApi, getFileComponentSetsApi, getComponentSetApi, getTeamStylesApi, getFileStylesApi, getStyleApi, headFileApi, getFileFullApi, getFileStreamApi, getFileComponentsStreamApi, getFileStylesStreamApi } from './api-funcs';
import { ApiRequestMethod, ApiStreamRequestMethod } from './utils';
export declare class Api {
    personalAccessToken?: string;
    oAuthToken?: string;
    constructor(params: {
        personalAccessToken: string;
    } | {
        oAuthToken: string;
    });
    appendHeaders: (headers: {
        [x: string]: string;
    }) => void;
    request: ApiRequestMethod;
    streamRequest: ApiStreamRequestMethod;
    headFile: typeof headFileApi;
    getFile: typeof getFileApi;
    getFileFull: typeof getFileFullApi;
    getFileNodes: typeof getFileNodesApi;
    getFileStream: typeof getFileStreamApi;
    getImage: typeof getImageApi;
    getImageFills: typeof getImageFillsApi;
    getComments: typeof getCommentsApi;
    postComment: typeof postCommentsApi;
    deleteComments: typeof deleteCommentsApi;
    getMe: typeof getUserMeApi;
    getVersions: typeof getVersionsApi;
    getTeamProjects: typeof getTeamProjectsApi;
    getProjectFiles: typeof getProjectFilesApi;
    getTeamComponents: typeof getTeamComponentsApi;
    getFileComponents: typeof getFileComponentsApi;
    getFileComponentsStream: typeof getFileComponentsStreamApi;
    getComponent: typeof getComponentApi;
    getTeamComponentSets: typeof getTeamComponentSetsApi;
    getFileComponentSets: typeof getFileComponentSetsApi;
    getComponentSet: typeof getComponentSetApi;
    getTeamStyles: typeof getTeamStylesApi;
    getFileStyles: typeof getFileStylesApi;
    getFileStylesStream: typeof getFileStylesStreamApi;
    getStyle: typeof getStyleApi;
}
export declare function oAuthLink(client_id: string, redirect_uri: string, scope: 'file_read', state: string, response_type: 'code'): string;
export declare function oAuthToken(client_id: string, client_secret: string, redirect_uri: string, code: string, grant_type: 'authorization_code'): Promise<{
    access_token: string;
    refresh_token: string;
    expires_in: number;
}>;
