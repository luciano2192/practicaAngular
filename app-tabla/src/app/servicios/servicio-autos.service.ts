import { Injectable } from '@angular/core';
import { Iauto } from '../iauto';

@Injectable({
  providedIn: 'root'
})
export class ServicioAutosService {
  
  autoUno: Iauto = {
    "id" : 1,
    "fecha" : new Date("11-15-1996"),
    "modelo" : "Fiat",
    "velocidad" : 120,
    "patente" : "no tiene",
    "url" : "https://img.clasf.com.ar/2019/01/18/Fiat-800-850-Manual-de-Taller-Despiece-Esquema-Electrico-20190118102100.2400010015.jpg"
  }

  autoDos: Iauto = {
    "id" : 2,
    "fecha" : new Date("06-22-2015"),
    "modelo" : "Dodge",
    "velocidad" : 90,
    "patente" : "vencida",
    "url" : "https://lh3.googleusercontent.com/-UIhmDFT7IMw/UVCdDnxgsvI/AAAAAAAAAK8/_H2ldRTYPxA/s400/dodge-1500-gt90.jpg"
  }

  autoTres: Iauto = {
    "id" : 3,
    "fecha" : new Date("03-31-2005"),
    "modelo" : "Chevrolet",
    "velocidad" : 170,
    "patente" : "ABC123",
    "url" : "http://4.bp.blogspot.com/_yI32TL6ngVA/SMM3zbGVXII/AAAAAAAAAaI/LjHZnwgvSeY/w1200-h630-p-k-no-nu/Chevy-Ss-Serie-2-A.jpg",
  }

  autos: Array<Iauto> = [this.autoUno,this.autoDos,this.autoTres];

  getAutos(): Iauto[] {
    return this.autos;
  }

  constructor() { }
}
