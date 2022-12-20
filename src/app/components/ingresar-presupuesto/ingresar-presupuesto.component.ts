import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { v4 as uuidv4 } from 'uuid';

import {PresupuestoService} from '../../services/presupuesto.service'
import {DivisaService} from '../../services/divisa.service'
import { Divisa } from '../../shared/Divisa';
import { Gasto, GastoDetalle } from '../../shared/Gasto';
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
    
      let presupuestoSave:Gasto={
        id:uuidv4(),
        nombre:this.nombre,
        presupuesto:this.presupuesto,
        divisa:this.divisa,
        gastototal:0,
        balance:this.presupuesto,
        gastodetalle:[]
      };
      this.presupuestoService.agregarGasto(presupuestoSave);
      this.router.navigate(['/gastos/'+ presupuestoSave.id])
    }
  }
}
