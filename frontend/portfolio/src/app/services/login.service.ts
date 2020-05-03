import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const SERVICE = environment.apiUrl;

@Injectable()
export class LoginService {

    constructor(private http: HttpClient) { }

    login(usuario): Observable<any> {
        return this.http.post(`${SERVICE}/login`, usuario, {observe: 'response', responseType: 'text'});
    }

    validar(): Observable<any> {
        return this.http.get(`${SERVICE}/rest/token/validar`);
    }

}