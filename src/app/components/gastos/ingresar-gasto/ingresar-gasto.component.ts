import { Component, OnInit } from '@angular/core';
import {CategoriaService} from '../../../services/categoria.service'
import { Categoria } from '../../../shared/Categoria';

@Component({
  selector: 'app-ingresar-gasto',
  templateUrl: './ingresar-gasto.component.html',
  styleUrls: ['./ingresar-gasto.component.css']
})
export class IngresarGastoComponent implements OnInit {
  categorias!: Categoria[] | undefined;
  constructor(private categoriaService: CategoriaService,){}

  ngOnInit(): void {
    this.categorias = this.categoriaService.get_categorias();
  }
}
