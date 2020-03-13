//MODULO PARA NGRX
//ng g m favorites --project=world-app --module=app.module.ts --routing --route=favorites

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritesComponent } from './favorites.component';
import { StoreModule } from '@ngrx/store';
import * as fromFavoritesManager from './store/favorites-manager/favorites-manager.reducer';
import { EffectsModule } from '@ngrx/effects';
import { FavoritesManagerEffects } from './store/favorites-manager/favorites-manager.effects';

const routes: Routes = [
  { path: '', component: FavoritesComponent }
];

@NgModule({
  declarations: [FavoritesComponent],
  imports: [
    CommonModule,
    FavoritesRoutingModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(fromFavoritesManager.favoritesManagerFeatureKey, fromFavoritesManager.reducer),
    EffectsModule.forFeature([FavoritesManagerEffects])
  ]
})
export class FavoritesModule { }
