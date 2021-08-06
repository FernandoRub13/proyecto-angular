import { Component, OnInit } from '@angular/core';
import { DestinoViajeComponent } from '../destino-viaje/destino-viaje.component';
import { DestinoViaje } from '../models/destino-viaje.model';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.scss']
})
export class ListaDestinosComponent implements OnInit {
  destinos: DestinoViaje[];

  constructor() {
    this.destinos = [];
   }

  ngOnInit(): void {

  }
  guardar(nombre:string,url:string):boolean{

    this.destinos.push(new DestinoViaje(nombre,url))
    console.log(this.destinos);
    console.log(nombre,url);
    
    return false;
  }

}
