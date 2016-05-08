import {Component} from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/common';
import {LoginService} from "../../../services/login/login.service";
import {User} from "../../../typings/user";

@Component ({
    selector: 'register',
    directives: [...FORM_DIRECTIVES],
    styles: [require('./register.component.scss')],
    template: require('./register.component.html'),
    viewProviders: [LoginService]
})
export class RegisterComponent {

    public error = '';

    private _loginService: LoginService;


    constructor(loginService:LoginService) {
        this._loginService = loginService;
    }

    register(user: User) {
        this.error = '';

        const subscription = this._loginService.register(user)
            .subscribe((result) => {

                subscription.unsubscribe();
            },
                (err) => this.error = err.json().message);
    }

}
