// COMPONENTE DE INTERFAZ
//ng g component regionItem --project=common-ui --module=ui.module.ts --export --inlineStyle --inlineTemplate

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { Region, Country } from '@practica-final/domain';
import { RegionsService } from '../../../../data/src/lib/regions/regions.service';

@Component({
  selector: 'ui-region-item',
  templateUrl: 'region-item.component.html',
  styles: []
})
export class RegionItemComponent implements OnInit {
  public countries:Country[];
  constructor(private activatedRoute:ActivatedRoute , dateService:RegionsService , private router:Router) { 
     
    this.activatedRoute.params.subscribe(
          param=>{
            console.log("RegionItemComponent. Ver region: "+param['code']);
            //llama a servicio que obtiene info de una region:
            dateService.getOneRegionFromApi(param['code']).subscribe(a=>{
              this.countries=a[1];
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
    
  /*método para ir a la página de pais */
  navigateToCountry(id:string){
    console.log("RegionItemComponent. Ver pais: "+id);
    this.router.navigate(['country/',id]);
  }

}


