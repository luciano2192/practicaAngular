import { Injectable } from '@angular/core';
import { EQUIPOS } from '../equipos';
import { ObserverService } from './observer.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceEquiposService {

  constructor(private observer: ObserverService) { }

  setEquipo(pais: string , codigo: string): any {
    this.observer.setObserver(EQUIPOS[pais][codigo]);
    console.log(EQUIPOS[pais][codigo]);
    
  }
}
