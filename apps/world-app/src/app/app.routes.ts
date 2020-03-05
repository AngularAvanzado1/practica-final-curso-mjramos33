/*FICHERO DE RUTAS*/

import { RouterModule, Routes } from '@angular/router';
import { RegionItemComponent,RegionsComponent,CountryItemComponent } from '@practica-final/ui';
import { HistoryComponent } from './history/history.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: RegionsComponent },
    { path: 'region/:code', component: RegionItemComponent },
    { path: 'country/:id', component: CountryItemComponent },
    { path: '**', pathMatch:'full', redirectTo: 'home' }
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
