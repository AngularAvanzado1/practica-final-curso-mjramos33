import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HistoryRoutingModule } from './history-routing.module';
import { HistoryComponent } from './history.component';

const routes: Routes = [
  { path: '', component: HistoryComponent }
];

@NgModule({
  declarations: [HistoryComponent],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    RouterModule.forChild(routes)
  ]
})
export class HistoryModule { }
