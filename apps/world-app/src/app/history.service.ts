import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  public navCounter$ = new BehaviorSubject(16);

  constructor() { 
  }

}
