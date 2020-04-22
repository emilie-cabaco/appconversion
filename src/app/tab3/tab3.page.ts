import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  euros: number;
  dollars: number;
  resultatd: number;
  resultate: number;

  constructor() {}

  
  conversiondollars(){
    this.resultatd= this.euros/0.75;
  }
  conversioneuros(){
    this.resultate= (this.dollars*0.72)/1;
  }

}
