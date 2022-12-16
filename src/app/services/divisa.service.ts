import { Injectable } from '@angular/core';
import { Divisa } from '../shared/Divisa';
import {Divisas} from '../shared/mock/mDivisas';
@Injectable({
  providedIn: 'root'
})
export class DivisaService {
  DivisasAll:Divisa[]=Divisas;
  constructor() { }

  get_divisas(): Divisa[] | undefined {
    return this.DivisasAll;
  }

}
