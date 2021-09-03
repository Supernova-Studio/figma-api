import {
    getFileApi,
    getFileNodesApi,
    getImageApi,
    getImageFillsApi,
    getCommentsApi,
    postCommentsApi,
    deleteCommentsApi,
    getUserMeApi,
    getVersionsApi,
    getTeamProjectsApi,
    getProjectFilesApi,
    getTeamComponentsApi,
    getFileComponentsApi,
    getComponentApi,
    getTeamComponentSetsApi,
    getFileComponentSetsApi,
    getComponentSetApi,
    getTeamStylesApi,
    getFileStylesApi,
    getStyleApi,
    headFileApi,
    getFileFullApi,
    getFileStreamApi,
    getFileComponentsStreamApi,
    getFileStylesStreamApi
} from './api-funcs';
import axios, { AxiosRequestConfig, Method as AxiosMethod } from 'axios';
import { toQueryParams, ApiRequestMethod, ApiStreamRequestMethod } from './utils';

export class Api {
    personalAccessToken?: string;
    oAuthToken?: string;

    constructor(params: {
        personalAccessToken: string,
    } | {
        oAuthToken: string,
    }) {
        if ('personalAccessToken' in params) {
            this.personalAccessToken = params.personalAccessToken;
        }
        if ('oAuthToken' in params) {
            this.oAuthToken = params.oAuthToken;
        }
    }

    appendHeaders = (headers: { [x: string]: string }) => {
        if (this.personalAccessToken) headers['X-Figma-Token'] = this.personalAccessToken;
        if (this.oAuthToken) headers['Authorization'] = `Bearer ${this.oAuthToken}`;
    }

    request: ApiRequestMethod = async <T>(url: string, opts?: { method: AxiosMethod, data?: string, fullResponse?: boolean }) => {
        const headers = {};
        this.appendHeaders(headers);

        const axiosParams: AxiosRequestConfig = {
            url,
            ...opts,
            headers,
        };

        const res = await axios(axiosParams);
        if (Math.floor(res.status / 100) !== 2) throw res.statusText;

        if (opts && opts.fullResponse) {
            return res
        } else {
            return res.data;
        }
    };

    streamRequest: ApiStreamRequestMethod = async (url: string, opts?: { method: AxiosMethod, data?: string }) => {
        const headers = {};
        this.appendHeaders(headers);

        const axiosParams: AxiosRequestConfig = {
            url,
            ...opts,
            headers,
            responseType: 'stream'
        };

        const res = await axios(axiosParams);
        if (Math.floor(res.status / 100) !== 2) throw res.statusText;
        return res;
    };

    headFile = headFileApi;
    getFile = getFileApi;
    getFileFull = getFileFullApi;
    getFileNodes = getFileNodesApi;
    getFileStream = getFileStreamApi;
    getImage = getImageApi;
    getImageFills = getImageFillsApi;
    getComments = getCommentsApi;
    postComment = postCommentsApi;
    deleteComments = deleteCommentsApi;
    getMe = getUserMeApi;
    getVersions = getVersionsApi;
    getTeamProjects = getTeamProjectsApi;
    getProjectFiles = getProjectFilesApi;
    getTeamComponents = getTeamComponentsApi;
    getFileComponents = getFileComponentsApi;
    getFileComponentsStream = getFileComponentsStreamApi;
    getComponent = getComponentApi;
    getTeamComponentSets = getTeamComponentSetsApi;
    getFileComponentSets = getFileComponentSetsApi;
    getComponentSet = getComponentSetApi;
    getTeamStyles = getTeamStylesApi;
    getFileStyles = getFileStylesApi;
    getFileStylesStream = getFileStylesStreamApi;
    getStyle = getStyleApi;
}

export function oAuthLink(
    client_id: string,
    redirect_uri: string,
    scope: 'file_read',
    state: string,
    response_type: 'code',
) {
    const queryParams = toQueryParams({
        client_id,
        redirect_uri,
        scope,
        state,
        response_type,
    });
    return `https://www.figma.com/oauth?${queryParams}`;
}

export async function oAuthToken(
    client_id: string,
    client_secret: string,
    redirect_uri: string,
    code: string,
    grant_type: 'authorization_code',
): Promise<{
    access_token: string,
    refresh_token: string,
    expires_in: number,
}> {
    const queryParams = toQueryParams({
        client_id,
        client_secret,
        redirect_uri,
        code,
        grant_type,
    });
    const url = `https://www.figma.com/api/oauth/token?${queryParams}`;
    const res = await axios({ url, method: 'POST' });
    if (res.status !== 200) throw res.statusText;
    return res.data;
}
