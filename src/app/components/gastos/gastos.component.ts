import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import {PresupuestoService} from '../../services/presupuesto.service'
import { Gasto } from '../../shared/Gasto';
import {DivisaService} from '../../services/divisa.service'
import { Divisa } from '../../shared/Divisa';
@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent implements OnInit {
  presupuesto!:Gasto|undefined;
  id_presupuesto!:string;
  divisas!: Divisa[] | undefined;

  constructor(private modalService: NgbModal,
              private presupuestoService: PresupuestoService,
              private divisaaService: DivisaService,
              private activatedRoute: ActivatedRoute,private router:Router){
                
  }
  ngOnInit(): void {
    this.divisas = this.divisaaService.get_divisas();
    this.id_presupuesto = String(this.activatedRoute.snapshot.paramMap.get('id'));
    this.presupuesto=this.presupuestoService.get_presupuesto(this.id_presupuesto);
    console.log("🚀 ~ file: gastos.component.ts:17 ~ GastosComponent ~ ngOnInit ~  this.presupuesto",  this.presupuesto)
  }

  reiniciarPresupuesto(){
      this.router.navigate(['/']);
  }
  openEdicionPresupuesto(modal: any): void {
    this.modalService.open(modal);
  }
  editarPresupuesto(){
      let gastoTotal:number=0;
      if(this.presupuesto?.gastodetalle?.length!>0){
        for(let gasto of this.presupuesto?.gastodetalle!){
            gastoTotal+=gasto.monto;
        }
      
      }
      this.presupuesto!.balance=this.presupuesto!.presupuesto-gastoTotal;
  }
  
}
