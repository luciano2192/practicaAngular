import { Component, OnInit } from '@angular/core';
import { TablaEquiposService } from '../servicios/tabla-equipos.service';
import { ActivatedRoute } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { ServiceEquiposService } from '../servicios/service-equipos.service';

@Component({
  selector: 'app-tabla-component',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  tablas: any[];
  pais: string;

  constructor(private servicioTabla: TablaEquiposService, private route: ActivatedRoute, private serviceEquipo: ServiceEquiposService) { }

  setearEquipo(codigo: string): void {
    this.serviceEquipo.setEquipo(this.pais, codigo);
  }

  ngOnInit() {
    const param$ = this.route.paramMap;

    param$.subscribe( ruta => {
      this.pais = ruta.get("pais");
      console.log(this.pais);
      
      this.tablas = this.servicioTabla.getTabla(ruta.get("pais"));
    });   
  }

}
