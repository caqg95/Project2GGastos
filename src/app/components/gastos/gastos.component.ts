import { Component, OnInit } from '@angular/core';
import {PresupuestoService} from '../../services/presupuesto.service'
import { Gasto } from '../../shared/Gasto';
@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent implements OnInit {
  presupuesto!:Gasto;
  constructor(private presupuestoService: PresupuestoService){

  }

  ngOnInit(): void {
    this.presupuesto=this.presupuestoService.presupuesto;
    console.log( this.presupuesto);
  }
}
