import { createAction, props } from '@ngrx/store';
import { Favorite } from './favorites-manager.model';


//definicion de Accion: tipo + payload.

export const loadFavorites = createAction(
  '[FavoritesManager] Load Favorites'
);

//5.3 Effects:
export const loadFavoritesSuccess = createAction(
  '[FavoritesManager] Load Favorites Sucess', 
  props<{newSucessCounter:number , sugerenciasSemanales:Favorite[]}>()
);
//5.3 Effects:
export const loadFavoritesError = createAction(
  '[FavoritesManager] Load Favorites Error'
);

/*ACCION AÑADIR FAVORITO*/
export const addFavorite= createAction(
  '[FavoritesManager] Add Favorite', 
  props<{newFav:Favorite}>()
);

//5.3 Effects:
export const addFavoriteSucess= createAction(
  '[FavoritesManager] Add Favorite Sucess'
);

//5.3 Effects:
export const addFavoriteError= createAction(
  '[FavoritesManager] Add Favorite Error'
);



