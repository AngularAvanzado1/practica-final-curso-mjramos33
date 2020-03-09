import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  public navCounter$ = new BehaviorSubject(0);
  public history$ = new BehaviorSubject([]);

  constructor() { 
  }

  /*Metodo que devuelve el historial bajo demanda
   para funcionalidades que no necesitan suscribirse
   a todos los cambios de history$
   ej: HistoryComponent.ngOnInit */
  getHistoryOnDemand(){
    return this.history$.value;
  }

  /*Metodo que devuelve el ID más alto utilizado para un item del historial*/ 
  getMaxID(){
    let maxID=0;
    if(this.history$.value!=null && this.history$.value.length>0){
      this.history$.value.forEach(
        historyItem => {
          if (historyItem.id>maxID)
              maxID=historyItem.id;
        }
      );//foreach
    }
    return maxID;
  }

}
