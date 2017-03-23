import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Request } from '../../../core/requests/request.model';

@Component({
    selector:"request-item",
    templateUrl:"./request-item.component.html",
    styleUrls: ['./request-item.component.css']
})
export class RequestItemComponent{
    @Input() request: Request;
    @Output() requestClick = new EventEmitter();
    constructor(){}

    navigateParentEvent(){
        this.requestClick.emit(this.request);
    }
}