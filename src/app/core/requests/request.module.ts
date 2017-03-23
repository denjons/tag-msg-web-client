import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// modules
import { ResponsesModule } from '../responses/responses.module';

// components
import { RequestComponent } from './request/request.component';
import { RequestItemComponent } from './item/request-item.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ResponsesModule
  ],
  exports:[RequestComponent, RequestItemComponent],
  declarations:[RequestComponent, RequestItemComponent]
})
export class RequestModule { }