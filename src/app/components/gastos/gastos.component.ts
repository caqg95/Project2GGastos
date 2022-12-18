import { Component, OnInit } from '@angular/core';
import {PresupuestoService} from '../../services/presupuesto.service'
@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent implements OnInit {

  constructor(private presupuestoService: PresupuestoService,){

  }

  ngOnInit(): void {
    console.log(this.presupuestoService.presupuesto);
  }
}
