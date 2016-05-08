import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {AuthService} from "../login/auth.service";
import {baseURL, routes} from "../../conf/api.conf";
import {SWOT} from "../../typings/swot";
import {Observable} from "rxjs/Observable";


@Injectable()
export class SWOTService {
    private _http: Http;
    private _auth: AuthService;

    constructor(http:Http, auth:AuthService) {
        this._http = http;
        this._auth = auth;
    }

    public list(): Observable<Array<SWOT>> {

        return this._http.get(baseURL + routes.swots, { headers: this._auth.getHeader() })
            .map((response: Response) => response.json());
    }

    public create(swot: SWOT): Observable<SWOT> {

        return this._http.post(baseURL + routes.swots, JSON.stringify(swot), { headers: this._auth.getHeader() })
            .map((response: Response) => response.json());
    }

    public read(id: String): Observable<SWOT> {

        return this._http.get(baseURL + routes.swots + `/${id}`, { headers: this._auth.getHeader() })
            .map((response: Response) => response.json());
    }

    public update(id: String, swot: SWOT): Observable<SWOT> {

        return this._http.put(baseURL + routes.swots + `/${id}`, JSON.stringify(swot), { headers: this._auth.getHeader() })
            .map((response: Response) => response.json());
    }

}
