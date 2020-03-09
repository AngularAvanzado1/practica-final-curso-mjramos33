import { Component, OnInit, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { NavigationItem } from '../../model/history.interface';

@Component({
  selector: 'ab-worldApp-history-presenter',
  templateUrl: './history-presenter.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class HistoryPresenterComponent implements OnInit {
  
  @Input() history:Array<NavigationItem>=[]; //Recibe el historial de navegacion a mostrar
  @Output() public removeItem=new EventEmitter<number>(); //Emite eventos para que el Container borre items del historial

  constructor() { 
  }

  ngOnInit(): void {
  }

}
