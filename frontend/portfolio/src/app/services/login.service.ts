import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const SERVICE = environment.apiUrl;

@Injectable()
export class LoginService {

    constructor(private http: HttpClient) { }

    login(usuario): Observable<any> {
        return this.http.post(`${SERVICE}/usuario/login`, usuario);
    }

    validar(token): Observable<any> {
        return this.http.post(`${SERVICE}/token/validar`, token);
    }

}