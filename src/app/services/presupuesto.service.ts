import { Injectable } from '@angular/core';
import { Gasto } from '../shared/Gasto';
import {Gastos} from '../shared/mock/mGastos';
@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {
  GastosAll:Gasto[]=Gastos;
  presupuesto:Gasto;
  constructor() { 
    this.presupuesto={
      nombre:'',
      presupuesto:0,
      balance:0,
      gastototal:0,
    };
  }
}
