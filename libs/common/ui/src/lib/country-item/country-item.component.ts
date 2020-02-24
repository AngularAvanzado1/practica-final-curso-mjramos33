// COMPONENTE DE INTERFAZ
//ng g component countryItem --project=common-ui --module=ui.module.ts --export --inlineStyle --inlineTemplate

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Country } from '@practica-final/domain';
import { RegionsService } from '@practica-final/data';
import { CountryAPIResp } from '@practica-final/domain';

@Component({
  selector: 'ui-country-item',
  templateUrl:'country-item.component.html',
  styles: []
})
export class CountryItemComponent implements OnInit {

  public country:Country;

  constructor(private activatedRoute:ActivatedRoute, private router:Router , private service:RegionsService) { 
    //recogemos el id del pais:
    activatedRoute.params.subscribe(
        param => {
          //recuperamos info del pais:
          this.service.getCountryFromApi(param['id']).subscribe(
            resp => {
              let aux:CountryAPIResp = resp[1];
              this.country=aux[0];
            });//subscribe HTTP Response
          }
      );//subscribe activated Router
  }

  ngOnInit(): void {
  }

  /*método para volver a la Home*/
  navigateToHome(){
    this.router.navigate(['home']);

  }

    /*método para volver a la region*/
    navigateToRegion(code:string){
      this.router.navigate(['region',code]);

    }

}
