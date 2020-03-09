import { Component ,EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import { HistoryService } from './history.service';


@Component({
  selector: 'ab-world-app-root',
  templateUrl: './app.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class AppComponent {
  title = 'world-app';
  navegaciones=0;
  history=[];


  constructor(private historyService:HistoryService){

    //nos suscribimos a los cambios en el contador de navegaciones
    this.historyService.navCounter$.subscribe({
      next:counter=>{
        console.log("[AppComponent]--->DETECCION CAMBIOS ONPUSH");
        this.navegaciones=counter;
      }
    });//subscribe
    
    //nos suscribimos a los cambios en el historial
    this.historyService.history$.subscribe({
        next:h=>{
          console.log("[AppComponent]--->DETECCION CAMBIOS ONPUSH");
          this.history=h;
        }
    });//subscribe


  }//constructoe
}
