//CONTAINER
//ng g m history --project=world-app --module=app.module.ts --routing --route=history

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationItem } from '../model/history.interface';
import { HistoryService } from '../history.service';

@Component({
  selector: 'ab-worldApp-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class HistoryComponent implements OnInit {

  public hist:Array<NavigationItem>; //historial de navegacion
  public navegacion=0;

  constructor(private router:Router , private serv:HistoryService ) { }

  ngOnInit(): void {
    //Para ver el historial en un momento dado, 
    //no nos suscribimos a los cambios onPush porque considero que no hace falta
    //nos basta con el valor en ese instante de tiempo:
    this.hist=this.serv.getHistoryOnDemand(); 
  }


  /*método para borrar un item del historial de navegacion*/
  public onRemove(idToRemove:number){
    this.hist=this.hist.filter( i=> i.id != idToRemove);
    this.serv.history$.next(this.hist);   //actualizamos historial  
    this.serv.navCounter$.next(this.serv.navCounter$.value-1);   //decrementamos contador de navegaciones
  }
  
  /*método para volver a la Home*/
  navigateToHome(){
    this.router.navigate(['home']);
  }

}

