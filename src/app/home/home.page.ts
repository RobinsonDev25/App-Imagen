import { ImagenService } from './../servicios/imagen.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  imagen:any;

  constructor(private imagenService:ImagenService) {}

  obtenerImagen(dato:any){
    this.imagen=dato.target.files[0];
  }

  storeImage(nombre:any){ {
    this.imagenService.saveImagen(nombre.value, this.imagen).subscribe({
      next:(data:any)=>{
        debugger
        console.log(data);
      },
      error:(error:any)=>{
        debugger
        console.log(error);
      }
    })
  }
}
}
