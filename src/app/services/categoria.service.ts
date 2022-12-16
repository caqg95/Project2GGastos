import { Injectable } from '@angular/core';
import { Categoria } from '../shared/Categoria';
import {Categorias} from '../shared/mock/mCategorias';
@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  CategoriasAll:Categoria[]=Categorias;
  constructor() { }

  get_categorias(): Categoria[] | undefined {
    return this.CategoriasAll;
  }
}
