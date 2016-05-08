import {Injectable} from '@angular/core';
import {Headers} from '@angular/http';


@Injectable()
export class AuthService {

    private _token: String = localStorage.getItem('token') || ''; //TODO: TMP !!

    private _id: String = localStorage.getItem('id') || '';

    public isLogged(): boolean {
        return this._token !== '';
    }
    
    set token(value:String) {
        this._token = value;
        localStorage.setItem('token', value + '');
    }


    get id():String {
        return this._id;
    }

    set id(value:String) {
        this._id = value;
        localStorage.setItem('id', value + '');
    }

    public decorateHeaders(headers: Headers): Headers{
        headers.append('Authorization', `Bearer ${this._token}`);
        return headers;
    }

    public getHeader(): Headers{
        const header: Headers = new Headers();
        header.append('Authorization', `Bearer ${this._token}`);
        return header;
    }

}
