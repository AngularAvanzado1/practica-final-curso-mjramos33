// COMPONENTE DE INTERFAZ
//ng g component regions --project=common-ui --module=ui.module.ts --export --inlineStyle --inlineTemplate

import { Router } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Region, RegionsAPIResp } from '@practica-final/domain';
import { RegionsService } from '@practica-final/data';
import { HistoryService } from '../../../../../../apps/world-app/src/app/history.service';


@Component({
  selector: 'ui-all-regions',
  templateUrl:'regions.component.html',
  styleUrls:['regions.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class RegionsComponent implements OnInit {
  public regions:Region[];

  constructor(private serv:RegionsService , private router:Router, private cdr:ChangeDetectorRef , private historyService:HistoryService) {  
  
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

  /*método para navegar a la pág de la region*/
  verRegion(code:string){
    this.router.navigate(['/region',code]);
    //Añadimos Item al historial de navegacion:
    this.insertItemInHistory("Home > Region '"+code+"'");

  }

  /*Metodo que modifica OnPUsh el historial*/
  insertItemInHistory(toPage:string){
    const navegacion={
      id:this.historyService.getMaxID()+1,
      page_name:toPage,
      date:new Date()
    }
    const newHistory =this.historyService.history$.value;
    newHistory.push(navegacion); 
    //añadimos ONPUSH navegacion a historial
    this.historyService.history$.next(newHistory);
    //incrementamos ONPUSH el contador de navegaciones
    this.historyService.navCounter$.next(this.historyService.navCounter$.value+1);
    ;
  }

}
