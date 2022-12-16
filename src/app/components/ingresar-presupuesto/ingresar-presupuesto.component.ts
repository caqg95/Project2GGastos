import { Component } from '@angular/core';

@Component({
  selector: 'app-ingresar-presupuesto',
  templateUrl: './ingresar-presupuesto.component.html',
  styleUrls: ['./ingresar-presupuesto.component.css']
})
export class IngresarPresupuestoComponent {
 presupuesto:number;
 presupuestoIncorrecto:boolean;

 constructor(){
  this.presupuesto=0;
  this.presupuestoIncorrecto=false;
 }
//  ngOnit():void{

//  }
agregarPregsupuesto(){
  this.presupuestoIncorrecto= this.presupuesto>0?false:true;
}
}
