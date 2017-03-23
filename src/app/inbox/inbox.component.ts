import { Component } from '@angular/core';

import { RequestService } from '../core/requests/request.service';

@Component({
    selector:"inbox",
    template:"<router-outlet></router-outlet>",
    providers:[RequestService]
})
export class InboxComponent{
    constructor(){}
}