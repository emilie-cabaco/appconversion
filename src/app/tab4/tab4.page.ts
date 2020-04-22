import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  pouces: number;
  cm: number;
  resultatp: number;
  resultatcm: number;

  constructor() { }

  conversionpouces(){
    this.resultatp= this.cm * 0.39370
  }

  conversioncm(){
    this.resultatcm= this.pouces / 0.39370 
  }

  ngOnInit() {
  }

}
