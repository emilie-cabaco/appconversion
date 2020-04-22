import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  miles: number;
  km: number;
  resultatm: number;
  resultatkm: number;

  constructor() {}

  conversionmiles(){
    this.resultatm= this.km * 0.62137; 
  }

  conversionkm(){
    this.resultatkm= this.miles / 0.62137; 
  }

}
