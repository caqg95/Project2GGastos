import { Component,Input } from '@angular/core';
import { Gasto } from '../../../shared/Gasto';

@Component({
  selector: 'app-listar-gasto',
  templateUrl: './listar-gasto.component.html',
  styleUrls: ['./listar-gasto.component.css']
})
export class ListarGastoComponent {
  @Input() presupuesto!: Gasto|undefined;
}
