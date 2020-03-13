import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as FavoritesManagerActions from './favorites-manager.actions';
import * as FavoritesManagerModel from './favorites-manager.model';
import { initialState } from './favorites-manager.reducer';

//nota: un efecto recibe como parametro de entrada una acción y devuelve otra acción.

@Injectable()
export class FavoritesManagerEffects {

  //este efecto, cuando termina loadFavorites: 
  //incrementa el contador y añade unas sugerencias semanales a los favoritos.
  loadFavoritesManagers$ = createEffect(
    () => this.actions$.pipe(
      ofType(FavoritesManagerActions.loadFavorites),
      concatMap(  () => {
        try{
          const aux=initialState.sucessCounter+1;
          //me invento unas sugerencias semanales y le aplico una logica inventada que no puede ir en el reducer(funciones puras)
          let sugerencias=[];
          let hour = new Date().getHours()
          if(hour >=12&& hour<=18){
              const sugerencia1:FavoritesManagerModel.Favorite={type:"sugerencia semanal - pais",name:"Andorra"};
              sugerencias=[sugerencia1];
          }else if(hour< 12 ){
            const sugerencia2:FavoritesManagerModel.Favorite={type:"sugerencia semanal - pais",name:"Cyprus"};
            sugerencias=[sugerencia2];
          }
          else{          
            const sugerencia3:FavoritesManagerModel.Favorite={type:"sugerencia semanal - region",name:"Latin America & Caribbean"};
            sugerencias=[sugerencia3];
          }
          return of(FavoritesManagerActions.loadFavoritesSuccess({newSucessCounter:aux, sugerenciasSemanales:sugerencias}));
        }
        catch(err){
          return of(FavoritesManagerActions.loadFavoritesError());
        }
      } )//concatMap
    )//pipe
  );//createEffect

  addFavoritesManagers$ = createEffect(
    () => this.actions$.pipe(
      ofType(FavoritesManagerActions.addFavorite),
      concatMap(  () => {
        try{
          return of(FavoritesManagerActions.addFavoriteSucess());
        }
        catch(err){
          return of(FavoritesManagerActions.addFavoriteError());
        }
      })//concat
    )//pipe
  );//createEffect
  

  constructor(private actions$: Actions) {}

}
