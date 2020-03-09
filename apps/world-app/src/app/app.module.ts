import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { UiModule } from '@practica-final/ui';
import { HttpClientModule } from '@angular/common/http';
import { APP_ROUTING } from './app.routes';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{ path: 'history', loadChildren: () => import('./history/history.module').then(m => m.HistoryModule) }, { path: 'explanation', loadChildren: () => import('./explanation/explanation.module').then(m => m.ExplanationModule) }], { initialNavigation: 'enabled' }), 
    UiModule,
    HttpClientModule, 
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
