import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {AuthService} from "../login/auth.service";
import {baseURL, routes} from "../../conf/api.conf";
import {SWOT} from "../../typings/swot";
import {Observable} from "rxjs/Observable";
import {Post} from "../../typings/post";


@Injectable()
export class POSTService {
    private _http: Http;
    private _auth: AuthService;

    constructor(http:Http, auth:AuthService) {
        this._http = http;
        this._auth = auth;
    }

    public list(swotId: String): Observable<Array<Post>> { // todo: query

        return this._http.get(baseURL + routes.swots + `/${swotId}` + routes.posts, { headers: this._auth.getHeader() })
            .map((response: Response) => response.json());
    }

    public create(swotId: String, post: Post): Observable<Post> {

        return this._http.post(baseURL + routes.swots + `/${swotId}` + routes.posts, JSON.stringify(post), { headers: this._auth.getHeader() })
            .map((response: Response) => response.json());
    }

    public delete(swotId: String, postId: String): Observable<Post> {

        return this._http.delete(baseURL + routes.swots + `/${swotId}` + routes.posts + `/${postId}`, { headers: this._auth.getHeader() })
            .map((response: Response) => response.json());
    }

}
