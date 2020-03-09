// COMPONENTE DE INTERFAZ
//ng g component regionItem --project=common-ui --module=ui.module.ts --export --inlineStyle --inlineTemplate

import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { Region, Country } from '@practica-final/domain';
import { RegionsService } from '../../../../data/src/lib/regions/regions.service';
import { HistoryService } from '../../../../../../apps/world-app/src/app/history.service';

@Component({
  selector: 'ui-region-item',
  templateUrl: 'region-item.component.html',
  styles: [], 
  changeDetection: ChangeDetectionStrategy.OnPush   
})
export class RegionItemComponent implements OnInit {

  public countries:Country[];
  public regionCode:string;

  constructor(private activatedRoute:ActivatedRoute , private dataService:RegionsService , 
                 private historyService:HistoryService, private router:Router , private cdr:ChangeDetectorRef) { 
  }

  ngOnInit(): void {
    //recibimos como parametro el codigo de la region a consultar
    this.activatedRoute.params.subscribe(
      param=>{
        console.log("[RegionItemComponent]. Ver region: "+param['code']);
        this.regionCode=param['code'];
        //llama a servicio que obtiene info de una region:
        this.dataService.getOneRegionFromApi(this.regionCode).subscribe(a=>{
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
    //incrementamos el contador de navegaciones
    this.insertItemInHistory("Region '"+this.regionCode+"' > Home");

  }
    
  /*método para ir a la página de pais */
  navigateToCountry(id:string,name:string){
    this.router.navigate(['country/',id]);
    //Añadimos Item al historial de navegacion:
    this.insertItemInHistory("Region '"+this.regionCode+"' > Country '"+name+"'");

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
    //añadimos navegacion a historial
    this.historyService.history$.next(newHistory);
    //incrementamos el contador de navegaciones
    this.historyService.navCounter$.next(this.historyService.navCounter$.value+1);
    ;
  }

}


