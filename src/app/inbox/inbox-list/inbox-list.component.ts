import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../core/requests/request.service';
import { Request } from '../../core/requests/request.model';
import {  Router } from '@angular/router';

@Component({
    selector:"inbox-list",
    templateUrl:"./inbox-list.component.html",
    styleUrls: ['./inbox-list.component.css']
})
export class InboxListComponent implements OnInit{
    
    requests: Request[];
    errorMessage: string;

    constructor(private requestService: RequestService, private router: Router){
    }

    ngOnInit(){
        console.log("initializing");
        this.requestService.getEligibleRequests().subscribe(
            requests => this.requests = requests,
            error => this.errorMessage = <any>error
        );
    }

    navigateToRequest(request:Request){
        this.router.navigate(["inbox/"+request.id])
    }


}