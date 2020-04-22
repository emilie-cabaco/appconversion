import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  fahrenneit: number = 0;
  celsius: number = 0;
  resultatf: number = 0;
  resultatc: number = 0;

  constructor() {}

  
  conversionc(){
    this.resultatf= this.celsius*1.8+32;
  }
  conversionf(){
    this.resultatc= (this.fahrenneit-32)/1.8;
  }



}
