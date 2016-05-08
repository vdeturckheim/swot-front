import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/login/auth.service";
import {Router} from '@angular/router-deprecated';
import {SWOTComponent} from "./swot/swot.component";
import {SWOTService} from "../../services/swots/swot.service";
import {SWOT} from "../../typings/swot";

@Component({
  selector: 'about',
  template: require('./about.html'),
  styles: [require('./about.scss')],
  providers: [],
  directives: [SWOTComponent],
  pipes: [],
  viewProviders: [SWOTService]
})
export class About implements OnInit{

  private _authService: AuthService;
  private _router: Router;
  private _swotService: SWOTService;

  public selectedSwot: SWOT;
  public selectedSwotId: String;

  public swotList: Array<SWOT> = [];


  constructor(authService: AuthService, router: Router, swotService: SWOTService) {
    this._authService = authService;
    this._router = router;
    this._swotService = swotService;
  }

  ngOnInit():any {

    if(!this._authService.isLogged()) {
      this._router.parent.navigate(['/Home']);
    }

    this._swotService.list().subscribe((result) => {

      this.swotList = result;
      if (result.length > 0){
        this.selectedSwot = result[0]
      }
    });

    return undefined;
  }

  selectSwot(): any {
    this.selectedSwot = this.swotList.find((swot) => swot._id === this.selectedSwotId);
  }




}
