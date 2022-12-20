import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {PresupuestoService} from '../../services/presupuesto.service'
import { Gasto } from '../../shared/Gasto';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent implements OnInit {
  presupuesto!:Gasto|undefined;
  id_presupuesto!:string;

  constructor(private presupuestoService: PresupuestoService,
              private activatedRoute: ActivatedRoute){

  }
  ngOnInit(): void {
    this.id_presupuesto = String(this.activatedRoute.snapshot.paramMap.get('id'));
    this.presupuesto=this.presupuestoService.get_presupuesto(this.id_presupuesto);
    console.log("🚀 ~ file: gastos.component.ts:17 ~ GastosComponent ~ ngOnInit ~  this.presupuesto",  this.presupuesto)
  }

}
