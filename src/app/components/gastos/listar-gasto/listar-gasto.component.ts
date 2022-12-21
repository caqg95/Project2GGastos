import { Component, Input, OnInit, } from "@angular/core";
import { Gasto,GastoDetalle } from '../../../shared/Gasto';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {CategoriaService} from '../../../services/categoria.service'
import { Categoria } from '../../../shared/Categoria';

@Component({
  selector: 'app-listar-gasto',
  templateUrl: './listar-gasto.component.html',
  styleUrls: ['./listar-gasto.component.css']
})
export class ListarGastoComponent implements OnInit{
  @Input() presupuesto!: Gasto|undefined;
  @Input() gastodetalle!: GastoDetalle;
  @Input() gastoNombreEditar!: string;
  @Input() gastoCategoriaEditar!: string;
  @Input() gastoMontoEditar!: string;

  gastoDetailDelete!:GastoDetalle;
  gastoIndexDetailDelete!:number;

  gastoDetailEditar!:GastoDetalle;
  gastoIndexDetailEditar!:number;

  gastoDetailMontoAntiguo!:number;

  categorias!: Categoria[] | undefined;

  monto!:number;
  nombre!:string;
  categoria!:string;

  constructor(private modalService: NgbModal, private categoriaService: CategoriaService) {
  }
  ngOnInit(): void {
    this.categorias = this.categoriaService.get_categorias();
  }

  eliminarGasto(){
    this.presupuesto?.gastodetalle?.splice(this.gastoIndexDetailDelete,1)
    this.presupuesto!.balance=this.presupuesto!.balance + this.gastoDetailDelete.monto;
    this.presupuesto!.gastototal=this.presupuesto!.gastototal - this.gastoDetailDelete.monto;
  }

  editarGasto(){
    console.log("gastoDetailMontoAntiguo", this.gastoDetailMontoAntiguo);
    console.log("this.gastoDetailEditar.monto",  this.gastoDetailEditar.monto)
    console.log("balance",  this.presupuesto!.balance)
    this.presupuesto!.gastodetalle![this.gastoIndexDetailEditar] = this.gastoDetailEditar;
    this.presupuesto!.balance=this.presupuesto!.balance + this.gastoDetailMontoAntiguo - this.gastoDetailEditar.monto;
    this.presupuesto!.gastototal=this.presupuesto!.gastototal - this.gastoDetailMontoAntiguo + this.gastoDetailEditar.monto;
  }
  public open(modal: any,gastoDelete:GastoDetalle,index:number): void {
    this.gastoDetailDelete=gastoDelete;
    this.gastoIndexDetailDelete=index;
    this.modalService.open(modal);
  }

  public openEdicion(modal: any,gastoEditar:GastoDetalle,index:number): void {
    this.gastoDetailEditar=gastoEditar;
    this.gastoIndexDetailEditar=index;
    this.modalService.open(modal);
  }

}


