import { Injectable } from '@angular/core';
import { TABLAS } from '../tablas';

@Injectable({
  providedIn: 'root'
})
export class TablaEquiposService {

  constructor() { }

  getTabla(pais: string): any{
    return TABLAS[pais];
  }
}
