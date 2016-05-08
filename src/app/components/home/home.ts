import {Component, OnInit} from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/common';
import {LoginService} from "../../services/login/login.service";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {AuthService} from "../../services/login/auth.service";
import {Router} from '@angular/router-deprecated';

@Component({
  selector: 'home',
  directives: [...FORM_DIRECTIVES, RegisterComponent, LoginComponent],
  pipes: [],
  styles: [require('./home.scss')],
  template: require('./home.html'),
  viewProviders: [LoginService]
})
export class Home implements OnInit {

  private _authService: AuthService;
  private _router: Router;


  constructor(authService:AuthService, router:Router) {
    this._authService = authService;
    this._router = router;
  }

  ngOnInit():any {

    if(this._authService.isLogged()) {
      this._router.parent.navigate(['/About']);
    }

    return undefined;
  }
}
