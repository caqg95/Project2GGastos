import { Component, OnInit } from '@angular/core';
import {PresupuestoService} from '../../../services/presupuesto.service'
import { Gasto } from '../../../shared/Gasto';
@Component({
  selector: 'app-gastodetalle',
  templateUrl: './gastodetalle.component.html',
  styleUrls: ['./gastodetalle.component.css']
})
export class GastodetalleComponent implements OnInit {
  presupuesto!:Gasto;
  constructor(private presupuestoService: PresupuestoService){}
  ngOnInit(): void {
    this.presupuesto=this.presupuestoService.presupuesto;
    console.log("🚀 ~ file: gastodetalle.component.ts:14 ~ GastodetalleComponent ~ ngOnInit ~ this.presupuesto", this.presupuesto)
    
  }
}
