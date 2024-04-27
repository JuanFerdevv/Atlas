import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http:HttpClient) { }

  getImages(folder: string): Observable<string[]> {
    // Hacer una petición HTTP para obtener la lista de imágenes desde un servidor
    return this.http.get<string[]>(`/api/images/${folder}`);
  }

}
