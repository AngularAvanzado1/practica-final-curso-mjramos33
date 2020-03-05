// COMPONENTE DE INTERFAZ
//ng g component regionItem --project=common-ui --module=ui.module.ts --export --inlineStyle --inlineTemplate

import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { Region, Country } from '@practica-final/domain';
import { RegionsService } from '../../../../data/src/lib/regions/regions.service';

@Component({
  selector: 'ui-region-item',
  templateUrl: 'region-item.component.html',
  styles: [], 
  changeDetection: ChangeDetectionStrategy.OnPush   
})
export class RegionItemComponent implements OnInit {

  public countries:Country[];
  constructor(private activatedRoute:ActivatedRoute , private dataService:RegionsService , private router:Router , private cdr:ChangeDetectorRef) { 
  }

  ngOnInit(): void {
    //recibimos como parametro el codigo de la region a consultar
    this.activatedRoute.params.subscribe(
      param=>{
        console.log("[RegionItemComponent]. Ver region: "+param['code']);
        //llama a servicio que obtiene info de una region:
        this.dataService.getOneRegionFromApi(param['code']).subscribe(a=>{
          this.countries=a[1];
          console.log("[RegionItemComponent]--->DETECCION CAMBIOS ONPUSH")
          this.cdr.detectChanges();      //FORZAMOS ONPUSH DE LOS CAMBIOS
        });//subscribe HTTP Response
      }
  );//subscribe activated Router

  }

  /*método para volver a la Home*/
  navigateToHome(){
    this.router.navigate(['home']);
  }
    
  /*método para ir a la página de pais */
  navigateToCountry(id:string){
    this.router.navigate(['country/',id]);
  }

}


