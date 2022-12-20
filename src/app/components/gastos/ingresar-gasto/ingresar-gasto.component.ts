import { Component, OnInit,Input } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

import {PresupuestoService} from '../../../services/presupuesto.service'
import {CategoriaService} from '../../../services/categoria.service'
import { Categoria } from '../../../shared/Categoria';
import { GastoDetalle, Gasto } from '../../../shared/Gasto';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-ingresar-gasto',
  templateUrl: './ingresar-gasto.component.html',
  styleUrls: ['./ingresar-gasto.component.css']
})
export class IngresarGastoComponent implements OnInit {

  @Input() presupuesto!: Gasto|undefined;
  categorias!: Categoria[] | undefined;

  nombre!:string;
  categoria!:string;
  monto!:number;

  formularioIncorrecto:boolean;
  textIncorrecto:string;

  constructor(private presupuestoService: PresupuestoService,private categoriaService: CategoriaService,){
    this.nombre='';
    this.monto=0;
    this.formularioIncorrecto=false;
    this.textIncorrecto='';
  }

  ngOnInit(): void {
    this.categorias = this.categoriaService.get_categorias();
  }

  agregarGasto(){
    //let presupuesto=this.presupuestoService.get_presupuesto(this.id_presupuesto);

    if(this.monto>this.presupuesto!.balance){
      this.formularioIncorrecto=true;
      this.textIncorrecto='El monto ingresado es mayor al balance';
      return;
    }
    if(this.nombre==='' || this.categoria==='' || this.monto<=0){
      this.formularioIncorrecto=true;
      this.textIncorrecto='Todo los campos son requeridos y el monto debe de ser mayor a 0';
    }
    else{
      this.formularioIncorrecto=false;

      let gastoDetalle:GastoDetalle;
      gastoDetalle={
        id:uuidv4(),
        nombre:this.nombre,
        categoria:this.categoria,
        monto:this.monto
      };      
      this.presupuesto!.gastodetalle?.push(gastoDetalle);

      this.presupuesto!.gastototal=this.presupuesto!.gastototal+this.monto;
      this.presupuesto!.balance=this.presupuesto!.balance-this.monto;    
      
      //this.presupuestoService.actualizarGasto(this.presupuesto);
      this.nombre='';
      this.monto=0;
      this.categoria='';
      this.formularioIncorrecto=false;

      console.log("🚀 ~ file: ingresar-gasto.component.ts:52 ~ IngresarGastoComponent ~ agregarGasto ~ this.presupuestoService.presupuesto",this.presupuesto)

    }
  }

}
