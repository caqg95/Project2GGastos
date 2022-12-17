import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {DivisaService} from '../../services/divisa.service'
import { Divisa } from '../../shared/Divisa';

@Component({
  selector: 'app-divisas',
  templateUrl: './divisas.component.html',
  styleUrls: ['./divisas.component.css']
})
export class DivisasComponent implements AfterViewInit,OnInit {

  divisas!: Divisa[] | undefined;
  displayedColumns: string[] = ['simbolo', 'nombre'];
  dataSource = new MatTableDataSource<Divisa>(this.divisas);

  @ViewChild(MatPaginator) paginator: MatPaginator = <MatPaginator>{};

  constructor(
    private divisaService: DivisaService,
  ){}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.divisas = this.divisaService.get_divisas();
    this.dataSource = new MatTableDataSource<Divisa>(this.divisas);
  }
}

