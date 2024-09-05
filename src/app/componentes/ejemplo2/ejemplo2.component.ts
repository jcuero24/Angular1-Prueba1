import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ejemplo1Component } from "../ejemplo1/ejemplo1.component";
import { setThrowInvalidWriteToSignalError } from '@angular/core/primitives/signals';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ejemplo2',
  standalone: true,
  imports: [Ejemplo1Component, RouterLink], 
  templateUrl: './ejemplo2.component.html',
  styleUrl: './ejemplo2.component.scss'
})
export class Ejemplo2Component implements OnInit, OnDestroy {
  saludo = "Ejemplo 2 works";
  imagenes = ["https://www.coindesk.com/resizer/cby-7AmuhU_coYGCIk94K8MclIg=/1056x595/filters:quality(80):format(jpg)/cloudfront-us-east-1.images.arcpublishing.com/coindesk/WMXJCFJ3ERCETA6TJNZ5NQPNKA.webp",
              "https://media.zenfs.com/en/motleyfool.com/4b24d7ec486e613542d8d34a2761e4cc",
              "https://media.istockphoto.com/id/1297445091/es/foto/shiba-inu-perro-de-raza-japon%C3%A9s.jpg?s=612x612&w=is&k=20&c=4NG5qRbbCcwJuORSGSHOjzzY5r1IF5aCZyFbrw9qvFU=",
              "https://www.elmueble.com/medio/2023/02/26/perro-de-raza-shiba-inu_b6387407_230226130353_900x900.jpg"
  ]

  imagenActual= this.imagenes[1]

  constructor(){}

  ngOnInit(): void {
       console.log('Componente inicializado')
  }

  ngOnDestroy(): void {
    console.log('Componente destruido')
  }

  enviarImagen(indice: number) {
    this.imagenActual = this.imagenes[indice]

  }

  onEmit(mensaje: string){
    this.saludo = mensaje
  }


}
