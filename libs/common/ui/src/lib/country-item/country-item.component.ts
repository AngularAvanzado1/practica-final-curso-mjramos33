// COMPONENTE DE INTERFAZ
//ng g component countryItem --project=common-ui --module=ui.module.ts --export --inlineStyle --inlineTemplate

import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Country } from '@practica-final/domain';
import { RegionsService } from '@practica-final/data';
import { CountryAPIResp } from '@practica-final/domain';
import { HistoryService } from '../../../../../../apps/world-app/src/app/history.service';

@Component({
  selector: 'ui-country-item',
  templateUrl:'country-item.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class CountryItemComponent implements OnInit {

  public country:Country;

  constructor(private activatedRoute:ActivatedRoute, private router:Router , private service:RegionsService,
              private cdr:ChangeDetectorRef, private historyService:HistoryService) { 

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
    //Añadimos Item al historial de navegacion:
    this.insertItemInHistory("Country '"+this.country.name+"' > Home");
  }

  /*método para volver a la region*/
  navigateToRegion(code:string){
    this.router.navigate(['region',code]);
    //Añadimos Item al historial de navegacion:
    this.insertItemInHistory("Country '"+this.country.name+"' > Region '"+code+"'");
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
