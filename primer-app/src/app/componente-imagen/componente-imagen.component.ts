import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-imagen',
  templateUrl: './componente-imagen.component.html',
  styleUrls: ['./componente-imagen.component.css']
})
export class ComponenteImagenComponent implements OnInit {

  imagenPaisaje: any = "./assets/imagen.jpg";
  
  constructor() { }

  ngOnInit() {
  }

}
