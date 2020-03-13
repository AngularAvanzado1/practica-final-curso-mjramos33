import { Action, createReducer, on } from '@ngrx/store';
import * as FavoritesManagerActions from './favorites-manager.actions';
import { FavoriteSet } from './favorites-manager.model';
import { addFavoriteError } from './favorites-manager.actions';


export interface FavoritesState {
    sucessCounter:number,       //contador de efectos Sucess
    favorites:FavoriteSet
}

export const initialState: FavoritesState = {   
  sucessCounter:0,
  favorites:{   
      set:[]
  }
}; //Estado inicial vacío

//exportamos Feature Key para selector:
export const favoritesManagerFeatureKey = 'favoritesManager';

//funcion reductora
export function reducer(state: FavoritesState | undefined, action: Action) {
  return myReducer(state, action);
}

//Un reducer requiere un estado inicial (snapshot, observable del estado actual clonado)  
//y una accion a realizar sobre ese estado
//formato >> createReducer(estadoInicial , on(action, function))
const myReducer = createReducer(
  initialState,
  
  on(FavoritesManagerActions.loadFavorites, state => state), //loadFavorites

  on(FavoritesManagerActions.loadFavoritesError, state => state), //loadFavoritesError

  on(FavoritesManagerActions.loadFavoritesSuccess,  //loadFavoritesSuccess
    (state, {newSucessCounter,sugerenciasSemanales}) => { 
                return {
                     ...state,
                      sucessCounter: newSucessCounter,
                      favorites:{
                        set:[...sugerenciasSemanales] //añade sugerenciasSemanales a set (técnicas de clonado = mutatedList)
                      },
                 }
            }
  ), 

  on(FavoritesManagerActions.addFavorite, 
    (state , {newFav})  => {
      //una funcion reductora obliga a clonar el estado y sus propiedades antes de cambiarlos:
      return{
          sucessCounter:state.sucessCounter,       //esto no es estrictamente necesario
          favorites:{
            set:[...state.favorites.set, newFav] //añade newFav a set (técnicas de clonado = mutatedList)
          },

      }
    }
  ),//addFavorite

  on(FavoritesManagerActions.addFavoriteSucess, state => state), //addFavoriteSucess
  on(FavoritesManagerActions.addFavoriteError, state => state), //addFavoriteError

);

