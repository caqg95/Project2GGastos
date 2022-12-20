import { Component, Input, } from "@angular/core";
import { PresupuestoService } from "src/app/services/presupuesto.service";
import { Gasto,GastoDetalle } from '../../../shared/Gasto';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-listar-gasto',
  templateUrl: './listar-gasto.component.html',
  styleUrls: ['./listar-gasto.component.css']
})
export class ListarGastoComponent {
  @Input() presupuesto!: Gasto|undefined;
  @Input() gastodetalle!: GastoDetalle;

  monto!:number;
  nombre!:string;
  categoria!:string;

  constructor(){
  }

  actualizaBalance(monto:number){
    this.presupuesto!.balance=this.presupuesto!.balance + monto;
    this.presupuesto!.gastototal=this.presupuesto!.gastototal - monto;    
  }


}


