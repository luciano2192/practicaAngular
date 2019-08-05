import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ServiceEquiposService } from './service-equipos.service';

@Injectable({
  providedIn: 'root'
})
export class ObserverService {

  private behaviorSubject = new BehaviorSubject<any>(null);
  private observer$: Observable<any> = this.behaviorSubject.asObservable();

  constructor() { }


  getObserver(): Observable<any> {
    return this.observer$;
  }

  setObserver(equipo: any) {
    this.behaviorSubject.next(equipo);
  }
}
