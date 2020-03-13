import { Injectable } from '@angular/core';
import {Store} from '@ngrx/store'
import { FavoriteSet, Favorite } from './favorites-manager.model';
import * as FavoritesManagerActions from './favorites-manager.actions';
import * as FavoritesManagerSelectors from './favorites-manager.selectors';
import { Observable } from 'rxjs';


@Injectable({providedIn:'root'})
export class FavoriteService{

    constructor(private store:Store<FavoriteSet>){
    }
    
    public loadFavorites(){
        this.store.dispatch(FavoritesManagerActions.loadFavorites());
    }

    public addFavorite(newFavorite:Favorite){
        this.store.dispatch(
            FavoritesManagerActions.addFavorite({
                newFav:{...newFavorite}    //clonamos el parámetro de entrada newFavorite 
            })
        );//dispatch
    }

    public getFavoritesList$():Observable<Favorite[]>{
        return this.store.select(FavoritesManagerSelectors.selectFavoritesSet);
    }
    
    

}