import {Component} from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/common';
import {LoginService} from "../../../services/login/login.service";
import {User} from "../../../typings/user";
import {Router} from '@angular/router-deprecated';


@Component ({
    selector: 'login',
    directives: [...FORM_DIRECTIVES],
    styles: [require('./login.component.scss')],
    template: require('./login.component.html'),
    viewProviders: [LoginService]
})
export class LoginComponent {

    public error = '';

    private _loginService: LoginService;
    private _router: Router;


    constructor(loginService:LoginService, router:Router) {
        this._loginService = loginService;
        this._router = router;
    }

    login(user: User) {
        this.error = '';

        const subscription = this._loginService.login(user)
            .subscribe((result) => {

                this._router.parent.navigate(['/About']);
                subscription.unsubscribe();
            },
                (err) => this.error = err.json().message);
    }

}
