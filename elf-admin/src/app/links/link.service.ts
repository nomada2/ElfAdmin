import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { protectedResources } from '../auth-config';

@Injectable({
    providedIn: 'root'
})
export class LinkService {
    url = protectedResources.linkApi.endpoint;

    constructor(private http: HttpClient) { }

    list(term: string, take: number, offset: number) {
        return this.http.get<Link[]>(this.url + `/list?take=${take}&offset=${offset}`)
    }
}

export interface Link {
    id: number;
    tenantId: string;
    originUrl: string;
}