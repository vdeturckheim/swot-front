import {Component, Input} from '@angular/core';
import {SWOT} from "../../../typings/swot";

@Component({
    selector: 'swot',
    template: require('./swot.component.html'),
    styles: [require('./swot.component.scss')],
    providers: [],
    directives: [],
    pipes: []
})
export class SWOTComponent {
    
    private _swot: SWOT;

    get swot():SWOT {
        return this._swot;
    }

    @Input()
    set swot(value:SWOT) {
        this._swot = value;
    }
}
