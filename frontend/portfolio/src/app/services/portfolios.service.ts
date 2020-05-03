import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const SERVICE = environment.apiUrl;

@Injectable()
export class PortfoliosService {

    constructor(private http: HttpClient) { }

    save(portfolio): Observable<any> {
        return this.http.post(`${SERVICE}/rest/projeto`, portfolio);
    }

    listPortfolios(): Observable<any> {
        return this.http.get(`${SERVICE}/rest/projeto`);
    }

    delete(id) {
        return this.http.delete(`${SERVICE}/rest/projeto/${id}`);
    }

}