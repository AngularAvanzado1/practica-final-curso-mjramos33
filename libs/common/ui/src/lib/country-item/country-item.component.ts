// COMPONENTE DE INTERFAZ
//ng g component countryItem --project=common-ui --module=ui.module.ts --export --inlineStyle --inlineTemplate

import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Country } from '@practica-final/domain';
import { RegionsService } from '@practica-final/data';
import { CountryAPIResp } from '@practica-final/domain';

@Component({
  selector: 'ui-country-item',
  templateUrl:'country-item.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class CountryItemComponent implements OnInit {

  public country:Country;

  constructor(private activatedRoute:ActivatedRoute, private router:Router , private service:RegionsService, private cdr:ChangeDetectorRef) { 
    //recogemos el id del pais:
     activatedRoute.params.subscribe(
      param => {
        console.log("[CountryItemComponent]. Ver PAIS: "+param['id']);
        //recuperamos info del pais:
        this.service.getCountryFromApi(param['id']).subscribe(
          resp =>{
            const aux:CountryAPIResp = resp[1];   
            this.country=aux[0];
            console.log("[CountryItemComponent]--->DETECCION CAMBIOS ONPUSH")
            cdr.detectChanges();      //FORZAMOS ONPUSH DE LOS CAMBIOS
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
