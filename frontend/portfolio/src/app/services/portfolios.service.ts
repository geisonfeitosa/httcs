import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const SERVICE = environment.apiUrl;

@Injectable()
export class PortfoliosService {

    constructor(private http: HttpClient) { }

    save(portfolio): Observable<any> {
        return this.http.post(`${SERVICE}/projeto`, portfolio);
    }

    listPortfolios(): Observable<any> {
        return this.http.get(`${SERVICE}/projeto`);
    }

    public delete(id) {
        return this.http.delete(`${SERVICE}/projeto/${id}`);
    }

}