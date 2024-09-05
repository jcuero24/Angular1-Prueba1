import { Input, OnChanges, SimpleChanges } from '@angular/core';
import { Output } from '@angular/core';
import { Component } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { MaterialModule } from '../../modulos/material/material.module';
import { FormsModule } from '@angular/forms';
import { EventEmitter } from '@angular/core';

export interface Persona {
  nombre: string
  imagen: string
}
@Component({
  selector: 'app-ejemplo1',
  standalone: true,
  imports: [MaterialModule, FormsModule],
  templateUrl: './ejemplo1.component.html',
  styleUrl: './ejemplo1.component.scss'
})
export class Ejemplo1Component implements OnChanges{
  ngOnChanges(changes: SimpleChanges): void {
     alert('Imagen cambiada, alerta disparada desde el componente hijo')
  }
  @Input() imagenDelPadre: string = '';
  @Output() emisor = new EventEmitter<string>();
  imagen = 'https://www.coindesk.com/resizer/cby-7AmuhU_coYGCIk94K8MclIg=/1056x595/filters:quality(80):format(jpg)/cloudfront-us-east-1.images.arcpublishing.com/coindesk/WMXJCFJ3ERCETA6TJNZ5NQPNKA.webp'
  
  nombre = '';
  nombres: Persona[] = [
    {nombre:'Andres', imagen:'https://img.freepik.com/foto-gratis/rubia-hombre-tenencia-algo_1368-2780.jpg?ga=GA1.1.1254245424.1725466049&semt=ais_hybrid'},
    {nombre:'Juan Carlos', imagen:'https://img.freepik.com/foto-gratis/hombre-joven-que-llevaba-traje-azul-haciendo-gesto-numero_1298-432.jpg?ga=GA1.1.1254245424.1725466049&semt=ais_hybrid'},
    {nombre:'Lorena', imagen:'https://img.freepik.com/foto-gratis/hermosa-mujer-joven-chaqueta-colorida-senalando_140725-12998.jpg?ga=GA1.1.1254245424.1725466049&semt=ais_hybrid'}
  ]
  
    setName(){
    this.nombre = 'Darth Vader';
  }
 
  alerta(nombre: string) {
    if (nombre === 'Darth Vader') {
      alert('Soy tu padre');
    }
  }
  
}