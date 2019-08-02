import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-auto',
  templateUrl: './componente-auto.component.html',
  styleUrls: ['./componente-auto.component.css']
})
export class ComponenteAutoComponent implements OnInit {

  velocidad: number;
  autoParam: any;

  autoUno: Object = {
    "id" : 1,
    "fecha" : 2017,
    "modelo" : "Fiat",
    "velocidad" : 120,
    "patente" : "no tiene"
  }

  autoDos: Object = {
    "id" : 2,
    "fecha" : 1987,
    "modelo" : "Dodge",
    "velocidad" : 90,
    "patente" : "vencida"
  }

  autoTres: Object = {
    "id" : 3,
    "fecha" : 2005,
    "modelo" : "Chevrolet",
    "velocidad" : 170,
    "patente" : "ABC123"
  }

  autos: Array<object> = [this.autoUno,this.autoDos,this.autoTres];

  cambiarColor(auto): any {
    if (this.velocidad >= auto.velocidad) {
      return 'text-danger';
    } else {
      return 'text-dark';
    }
  };

  guardarAuto(auto): void {
    this.autoParam = auto;
  }

  constructor() { }

  ngOnInit() {
  }

}
