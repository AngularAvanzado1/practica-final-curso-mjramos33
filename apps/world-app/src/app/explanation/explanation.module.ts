import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ExplanationRoutingModule } from './explanation-routing.module';
import { ExplanationComponent } from './explanation.component';

const routes: Routes = [
  { path: '', component: ExplanationComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ExplanationRoutingModule,
    RouterModule.forChild(routes)
  ]
})
export class ExplanationModule { }
