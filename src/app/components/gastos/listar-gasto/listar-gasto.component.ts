import { Component,Input } from '@angular/core';
import { Gasto } from '../../../shared/Gasto';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-listar-gasto',
  templateUrl: './listar-gasto.component.html',
  styleUrls: ['./listar-gasto.component.css']
})
export class ListarGastoComponent {
  @Input() presupuesto!: Gasto|undefined;

  constructor(
    private modalService: NgbModal,){

}
  public open(modal: any): void {
    this.modalService.open(modal);
  }
}
