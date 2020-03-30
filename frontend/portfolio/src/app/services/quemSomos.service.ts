import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const SERVICE = environment.apiUrl;

@Injectable()
export class QuemSomosService {

    constructor(private http: HttpClient) { }

    save(quemSomos): Observable<any> {
        return this.http.post(`${SERVICE}/quem-somos`, quemSomos);
    }

    listQuemSomos(): Observable<any> {
        return this.http.get(`${SERVICE}/quem-somos`);
    }

    delete(id) {
        return this.http.delete(`${SERVICE}/quem-somos/${id}`);
    }

}