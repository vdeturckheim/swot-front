import {enableProdMode} from "@angular/core";
import {bootstrap} from '@angular/platform-browser-dynamic';
import {ELEMENT_PROBE_PROVIDERS} from '@angular/platform-browser';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {HTTP_PROVIDERS} from '@angular/http';

const ENV_PROVIDERS = [];
// depending on the env mode, enable prod mode or add debugging modules
if (process.env.ENV === 'build') {
  enableProdMode();
} else {
  ENV_PROVIDERS.push(ELEMENT_PROBE_PROVIDERS);
}

/*
 * App Component
 * our top level component that holds all of our components
 */
import {App} from './app/app';
import {AuthService} from "./app/services/login/auth.service";

/*
 * Bootstrap our Angular app with a top level component `App` and inject
 * our Services and Providers into Angular's dependency injection
 */
document.addEventListener('DOMContentLoaded', function main() {
  return bootstrap(App, [
    // These are dependencies of our App
    ...HTTP_PROVIDERS,
    ...ROUTER_PROVIDERS,
    ...ENV_PROVIDERS,
      AuthService,
    { provide: LocationStrategy, useClass: HashLocationStrategy } // use #/ routes, remove this for HTML5 mode
  ])
  .catch(err => console.error(err));
});
