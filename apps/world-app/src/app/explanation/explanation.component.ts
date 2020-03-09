import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ab-worldApp-explanation',
  templateUrl: './explanation.component.html'
})
export class ExplanationComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

    
  /*método para volver a la Home*/
  navigateToHome(){
    this.router.navigate(['home']);
  }


}
