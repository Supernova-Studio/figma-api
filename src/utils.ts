import { AxiosResponse, Method as AxiosMethod } from 'axios';
import { Stream } from 'stream';

export function toQueryParams(x: any): string {
    if (!x) return '';
    return Object.entries(x).map(([ k, v ]) => (
        k && v && `${k}=${encodeURIComponent(v as any)}`
    )).filter(Boolean).join('&')
}

export type Disposer = () => void;

export class ApiError extends Error {
    constructor(
        public response: AxiosResponse,
        message?: string,
    ) {
        super(message);
    }
}

export type ApiRequestMethod = <T>(url: string, opts?: { method: AxiosMethod, data?: string, fullResponse?: boolean }) => Promise<T>;
export type ApiStreamRequestMethod = (url: string, opts?: { method: AxiosMethod, data?: string }) => Promise<AxiosResponse>;
