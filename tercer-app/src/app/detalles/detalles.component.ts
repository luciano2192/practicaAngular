import { Component, OnInit } from '@angular/core';
import { ObserverService } from '../servicios/observer.service';

@Component({
  selector: 'app-detalles-component',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  observar = this.observer.getObserver();
  equipo: any;

  constructor(private observer: ObserverService) { }

  ngOnInit() {
    this.observar.subscribe( consulta => {
      this.equipo = consulta;
    })
  }

}
