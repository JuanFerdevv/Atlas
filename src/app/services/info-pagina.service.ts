import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPage } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})

export class InfoPaginaService {
  Proyectos:any[]=[];
  info:InfoPage={};
  cargada=false;

  constructor(private http: HttpClient) { 

    this.cargarInfo();
   
  }

  private cargarInfo(){
    this.http.get('assets/data/data-pagina.json').subscribe((resp: InfoPage)=>{

      this.cargada=true;
      this.info=resp;
      console.log(resp);

    });

}



}