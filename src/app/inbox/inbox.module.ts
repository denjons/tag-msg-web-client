import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// modules
import { RequestModule } from '../core/requests/request.module';

// routing
import { InboxRoutingModule, routableComponents } from './inbox-routing.module';

// services
import { RequestService } from '../core/requests/request.service';

// extensions
import '../core/rxjs-extensions';

@NgModule({
  declarations: [
    routableComponents
  ],
  imports: [
    CommonModule,
    FormsModule,
    RequestModule,
    InboxRoutingModule
  ],
  providers: [RequestService]
})
export class InboxModule { }