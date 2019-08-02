import { Component, OnInit } from '@angular/core';
import { ServicioAutosService } from '../servicios/servicio-autos.service';

@Component({
  selector: 'app-componente-auto',
  templateUrl: './componente-auto.component.html',
  styleUrls: ['./componente-auto.component.css']
})
export class ComponenteAutoComponent implements OnInit {

  velocidad: number;
  autoParam: any;
  autos: any[];

  // autoUno: Object = {
  //   "id" : 1,
  //   "fecha" : new Date("11-15-1996"),
  //   "modelo" : "Fiat",
  //   "velocidad" : 120,
  //   "patente" : "no tiene"
  // }

  // autoDos: Object = {
  //   "id" : 2,
  //   "fecha" : new Date("06-22-2015"),
  //   "modelo" : "Dodge",
  //   "velocidad" : 90,
  //   "patente" : "vencida"
  // }

  // autoTres: Object = {
  //   "id" : 3,
  //   "fecha" : new Date("03-31-2005"),
  //   "modelo" : "Chevrolet",
  //   "velocidad" : 170,
  //   "patente" : "ABC123"
  // }

  // autos: Array<object> = [this.autoUno,this.autoDos,this.autoTres];

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

  constructor(private servicioAutos: ServicioAutosService) { }

  ngOnInit() {
    this.autos = this.servicioAutos.getAutos();
  }

}
