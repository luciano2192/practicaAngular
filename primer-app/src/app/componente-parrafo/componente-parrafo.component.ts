import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-parrafo',
  templateUrl: './componente-parrafo.component.html',
  styleUrls: ['./componente-parrafo.component.css']
})
export class ComponenteParrafoComponent implements OnInit {

  parrafo: string = "descripcion de la imagen";
  array: [];

  constructor() { }

  ngOnInit() {
  }

}
