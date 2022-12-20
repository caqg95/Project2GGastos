import { Component, OnInit ,Input} from '@angular/core';
import { Gasto } from '../../../shared/Gasto';
@Component({
  selector: 'app-gastodetalle',
  templateUrl: './gastodetalle.component.html',
  styleUrls: ['./gastodetalle.component.css']
})
export class GastodetalleComponent  {
  @Input() presupuesto!: Gasto|undefined;
}
