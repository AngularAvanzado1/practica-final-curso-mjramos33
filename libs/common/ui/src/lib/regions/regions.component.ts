// COMPONENTE DE INTERFAZ
//ng g component regions --project=common-ui --module=ui.module.ts --export --inlineStyle --inlineTemplate

import { Router } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Region, RegionsAPIResp } from '@practica-final/domain';
import { RegionsService } from '@practica-final/data';


@Component({
  selector: 'ui-all-regions',
  templateUrl:'regions.component.html',
  styleUrls:['regions.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class RegionsComponent implements OnInit {
  public regions:Region[];

  constructor(private serv:RegionsService , private router:Router, private cdr:ChangeDetectorRef) {  
  }
  
  ngOnInit(): void {
    console.log("[RegionsComponent].Ver regiones");
   //llamada al servicio que recupera todas las regiones
    this.serv.getRegionsFromApi().subscribe(
      (data:RegionsAPIResp) => {
        //cogemos el array de Region y lo filtramos por ID 
        this.regions= this.filtrarRegionesIDNumerico(data[1]);
        console.log("[RegionsComponent]--->DETECCION CAMBIOS ONPUSH")
        this.cdr.detectChanges(); //forzamos on push de los cambios
      },
      (error) => {console.log(error)},
    );

  }
  
  filtrarRegionesIDNumerico(regions:Region[]):Region[]{
      //filtramos el array que recibimos como parámetro
      return regions.filter( 
        function (regionItem) {
          return regionItem.id.length>0;
        }
      );
  }

  verRegion(code:string){
    this.router.navigate(['/region',code]);
  }

}
