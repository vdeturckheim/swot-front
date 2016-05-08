import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {User} from "../../typings/user";
import {Observable} from "rxjs/Observable";
import {baseURL, routes} from "../../conf/api.conf";
import {AuthService} from "./auth.service";
import {Headers} from '@angular/http';

@Injectable()
export class LoginService {

    private _http: Http;
    private _auth: AuthService;


    constructor(http:Http, auth:AuthService) {
        this._http = http;
        this._auth = auth;
    }

    public register(user: User): Observable<User> {
        const request = this._http.post(baseURL + routes.register, JSON.stringify(user))
            .map((response: Response) => response.json());

        return request;
    }
    
    public login(user: User): Observable<boolean> {

        const header: Headers = new Headers();
        header.append('Authorization', `Basic ${btoa(`${user.name}:${user.password}`)}`);

        const result = this._http.get(baseURL + routes.login, {headers: header})
            .map((response: Response) => response.json());
        
        result.subscribe((response) => {

                this._auth.token = response.token;
                this._auth.id = response._id;
            });

        return result.map((response) => !!response.token);
    }

}
