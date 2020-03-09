import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HistoryRoutingModule } from './history-routing.module';
import { HistoryComponent } from './history.component';
import { HistoryPresenterComponent } from './history-presenter/history-presenter.component';

const routes: Routes = [
  { path: '', component: HistoryComponent }
];

@NgModule({
  declarations: [HistoryComponent, HistoryPresenterComponent],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    RouterModule.forChild(routes)
  ]
})
export class HistoryModule { }
