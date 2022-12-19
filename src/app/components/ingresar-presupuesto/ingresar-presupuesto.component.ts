import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PresupuestoService} from '../../services/presupuesto.service'
import {DivisaService} from '../../services/divisa.service'
import { Divisa } from '../../shared/Divisa';
@Component({
  selector: 'app-ingresar-presupuesto',
  templateUrl: './ingresar-presupuesto.component.html',
  styleUrls: ['./ingresar-presupuesto.component.css']
})
export class IngresarPresupuestoComponent implements OnInit {
  divisas!: Divisa[] | undefined;
  nombre:string;
  nombreIncorrecto:boolean;

  presupuesto:number;
  presupuestoIncorrecto:boolean;

  divisa:string;
  divisaIncorrecto:boolean;


  constructor(private presupuestoService: PresupuestoService,
              private divisaService: DivisaService,
              private router:Router){

    this.nombre=''
    this.nombreIncorrecto=false;

    this.presupuesto=0;
    this.presupuestoIncorrecto=false;

    this.divisa='$';
    this.divisaIncorrecto=false;

  }
  ngOnInit(): void {
    this.divisas = this.divisaService.get_divisas();
  }

  agregarPregsupuesto(){
    
    this.nombreIncorrecto= this.nombre!==''?false:true;
    this.presupuestoIncorrecto= this.presupuesto>0?false:true;
    this.divisaIncorrecto= this.divisa!==''?false:true;
    
    if(this.presupuestoIncorrecto===false && this.nombreIncorrecto===false && this.divisaIncorrecto===false){
      this.presupuestoService.presupuesto={
        nombre:this.nombre,
        presupuesto:this.presupuesto,
        divisa:this.divisa,
        gastototal:0,
        balance:0
      };
      this.router.navigate(['/gastos'])
    }
  }
}
