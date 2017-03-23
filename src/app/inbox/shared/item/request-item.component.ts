import { Component, Input } from '@angular/core';
import { Request } from '../../../core/requests/request.model';

@Component({
    selector:"request-item",
    templateUrl:"./request-item.component.html",
    styleUrls: ['./request-item.component.css']
})
export class RequestItemComponent{
    @Input() request: Request;
    constructor(){}
}