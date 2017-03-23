import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { InboxComponent } from './inbox.component';
import { InboxListComponent } from './inbox-list/inbox-list.component';
import { InboxRequestComponent } from './request/inbox.component';


const routes: Routes = [
  {
    path: '',
    component: InboxComponent,
    children: [
      {
        path: '',
        component: InboxListComponent,
      }
      ,{
        path: ':id',
        component: InboxRequestComponent,
        //canDeactivate: [CanDeactivateGuard],
        //resolve: {
        // vehicle: VehicleResolver
        // }
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
    ]
})
export class InboxRoutingModule { }

export const routableComponents = [
  InboxComponent,
  InboxRequestComponent,
  InboxListComponent
];