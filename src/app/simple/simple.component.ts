import { Component } from '@angular/core';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent {

  num1: any;
  num2:any;
  result:any;

  sum(){
    this.result=this.num1+this.num2;
  }
  minus(){
    this.result=this.num1-this.num2;
  }
  multi(){
    this.result=this.num1*this.num2;
  }
  division(){
    this.result=(this.num1)/(this.num2);
  }





}
