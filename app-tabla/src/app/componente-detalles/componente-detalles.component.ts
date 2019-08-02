import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-componente-detalles',
  templateUrl: './componente-detalles.component.html',
  styleUrls: ['./componente-detalles.component.css']
})
export class ComponenteDetallesComponent implements OnInit {

  @Input("param") autoGuardado : any;

  constructor() { }

  ngOnInit() {
  }

}
