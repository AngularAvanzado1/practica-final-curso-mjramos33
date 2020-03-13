import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule} from '@angular/router';
import { UiModule } from '@practica-final/ui';
import { HttpClientModule } from '@angular/common/http';
import { APP_ROUTING } from './app.routes';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule,RouterState, routerReducer } from '@ngrx/router-store';
import { reducers, metaReducers } from './reducers';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'history',
          loadChildren: () =>
            import('./history/history.module').then(m => m.HistoryModule)
        },
        {
          path: 'explanation',
          loadChildren: () =>
            import('./explanation/explanation.module').then(
              m => m.ExplanationModule
            )
        },
      { path: 'favorites', loadChildren: () => import('./favorites/favorites.module').then(m => m.FavoritesModule) }
      ],
      { initialNavigation: 'enabled' }
    ),
    UiModule,
    HttpClientModule,
    APP_ROUTING,
    StoreModule.forRoot(
      {
        router:routerReducer
        // routerReducer es una funcion reductora que tiene sus estados y acciones
        // Ademas de notificar los estados y que ocurran la snavegaciones en DevTool,
        // tendremos el 
      },
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true
        }
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot({routerState:RouterState.Minimal}) //para reducir la info que mete en el payload
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
