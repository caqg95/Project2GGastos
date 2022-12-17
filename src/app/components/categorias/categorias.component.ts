import { AfterViewInit,Component, ViewChild, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {CategoriaService} from '../../services/categoria.service'
import { Categoria } from '../../shared/Categoria';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {

  categorias!: Categoria[] | undefined;
  displayedColumns: string[] = ['nombre'];
  dataSource = new MatTableDataSource<Categoria>(this.categorias);

  @ViewChild(MatPaginator) paginator: MatPaginator = <MatPaginator>{};

  constructor(
    private categoriaService: CategoriaService,
  ){}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.categorias = this.categoriaService.get_categorias();
    this.dataSource = new MatTableDataSource<Categoria>(this.categorias);
  }

}
