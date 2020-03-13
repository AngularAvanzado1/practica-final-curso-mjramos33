import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as Reducer from './favorites-manager.reducer';


/*Selector del estado */
export const selectFavoritesState = createFeatureSelector<Reducer.FavoritesState>( Reducer.favoritesManagerFeatureKey );

/*Selector de la lista de favoritos */
export const selectFavoritesSet = createSelector(
  selectFavoritesState,
  (state:Reducer.FavoritesState) => state.favorites.set
);

/*Selector de la longitud de la lista de favoritos */
export const selectFavoritesCount= createSelector(
  selectFavoritesState,
  (state:Reducer.FavoritesState) => state.favorites.set.length
);