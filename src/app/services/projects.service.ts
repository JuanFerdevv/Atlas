import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proyectos} from '../interfaces/info-proyectos.interface';

@Injectable({
  providedIn: 'root'
})

export class ProjectsService {

  proyecto:any[]=[];
  

  constructor( private http:HttpClient) {

    this.cargarProyectos();
   }

   private cargarProyectos() {
    const url = 'https://atlas-5fdc7-default-rtdb.firebaseio.com/proyectos.json';
    this.http.get(url).subscribe((resp: any) => {
    console.log(resp);
    this.proyecto = resp;

  });

  
  }
  getProyecto(id:string){
    return this.http.get(`https://atlas-5fdc7-default-rtdb.firebaseio.com/proyectos_id/${id}.json`)
  }


}