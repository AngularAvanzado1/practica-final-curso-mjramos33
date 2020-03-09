import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExplanationComponent } from './explanation.component';

const routes: Routes = [{ path: '', component: ExplanationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExplanationRoutingModule { }
