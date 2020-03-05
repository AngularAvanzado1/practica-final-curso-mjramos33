import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ab-worldApp-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  public navegacion=0;
  constructor(private router:Router ) { }

  ngOnInit(): void {
  }

  /*método para volver a la Home*/
  navigateToHome(){
    this.router.navigate(['home']);
  }

}
