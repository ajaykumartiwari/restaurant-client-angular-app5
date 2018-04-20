import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(id: string, name: string) {
        return this.http.post<any>('/api/authenticate', { id: id, name: name })
            .map(data => {
                // login successful if there's a jwt token in the response
                if (data && data.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentData', JSON.stringify(data));
                }

                return data;
            });
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentData');
    }
}