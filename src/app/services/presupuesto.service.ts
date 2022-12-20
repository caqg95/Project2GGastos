import { Injectable } from '@angular/core';
import { Gasto } from '../shared/Gasto';
import {Gastos} from '../shared/mock/mGastos';
@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {
  presupuestos:Gasto[]=Gastos;
  //presupuesto:Gasto;
  constructor() { 
    // this.presupuesto={
    //   nombre:'',
    //   presupuesto:0,
    //   balance:0,
    //   gastototal:0,
    //   gastodetalle:[]
    // };
  }

  get_presupuestos(): Gasto[] | undefined {
    return this.presupuestos;
  }

  get_presupuesto(id: string): Gasto | undefined {
    return this.presupuestos.find((r) => r.id === id);
  }

  agregarGasto(presupuestoSave:Gasto){
    // this.presupuestos={...this.presupuestos,...presupuestoSave};
    this.presupuestos.push(presupuestoSave);
    console.log("🚀 ~ file: presupuesto.service.ts:32 ~ PresupuestoService ~ agregarGasto ~  this.presupuestos",  this.presupuestos)
  }
  actualizarGasto(presupuestoUpdate:Gasto|undefined){
    this.presupuestos={...this.presupuestos,...presupuestoUpdate};
  }

}
