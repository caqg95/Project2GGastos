import { Component, Input, } from "@angular/core";
import { Gasto,GastoDetalle } from '../../../shared/Gasto';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-listar-gasto',
  templateUrl: './listar-gasto.component.html',
  styleUrls: ['./listar-gasto.component.css']
})
export class ListarGastoComponent {
  @Input() presupuesto!: Gasto|undefined;
  @Input() gastodetalle!: GastoDetalle;

  gastoDetailDelete!:GastoDetalle;
  gastoIndexDetailDelete!:number;
  monto!:number;
  nombre!:string;
  categoria!:string;

  constructor(private modalService: NgbModal) {
  }

  eliminarGasto(){
    this.presupuesto?.gastodetalle?.splice(this.gastoIndexDetailDelete,1)
    this.presupuesto!.balance=this.presupuesto!.balance + this.gastoDetailDelete.monto;
    this.presupuesto!.gastototal=this.presupuesto!.gastototal - this.gastoDetailDelete.monto;    
  }

  public open(modal: any,gastoDelete:GastoDetalle,index:number): void {
    this.gastoDetailDelete=gastoDelete;
    this.gastoIndexDetailDelete=index;
    this.modalService.open(modal);
  }

}


