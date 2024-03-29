import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.css'
})
export class CalcComponent {
  num1: number = 0;
  num2: number = 0;
  result: number = 0;

  calc(){
    this.result = this.num1 + this.num2;
  }
  div(){
    this.result = this.num1 / this.num2;
  }
  sub(){
    this.result = this.num1 - this.num2;
  }
  mult(){
    this.result = this.num1 * this.num2;
  }
}
