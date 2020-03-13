import { Component, OnInit } from '@angular/core';
import { FavoriteService } from './store/favorites-manager/favorites-manager.service';
import { Favorite, FavoriteSet } from './store/favorites-manager/favorites-manager.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'ab-worldApp-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  //observable para recibir los cambios del selector
  public favoriteSet$:Observable<Favorite[]>

  constructor( private favoriteService:FavoriteService, private router:Router) { }

  ngOnInit(): void {

      //nos suscribimos a los cambios del Observable 
      //a través de un servicio
      this.favoriteSet$=this.favoriteService.getFavoritesList$();

      //Modificamos el estado a través de un servicio
      this.favoriteService.loadFavorites();

      const fav1:Favorite={type:"region",name:"Sub-Saharan Africa"};
      this.favoriteService.addFavorite(fav1);
      
      const fav2:Favorite={type:"country",name:"Maldives"};
      this.favoriteService.addFavorite(fav2);
  
  }



  /*método para volver a la Home*/
  navigateToHome(){
    this.router.navigate(['home']);
  }



}
