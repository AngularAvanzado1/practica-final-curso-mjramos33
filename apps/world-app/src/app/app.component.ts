import { Component ,EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import { HistoryService } from './history.service';


@Component({
  selector: 'ab-world-app-root',
  templateUrl: './app.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush 

})
export class AppComponent {
  
  navegacion=0;
  title = 'world-app';


  constructor(private historyTervice:HistoryService){
    historyTervice.navCounter$.subscribe({
        next:counter=>{
          this.navegacion=counter;
        }
      });//subscribe
  }//constructor*
}
