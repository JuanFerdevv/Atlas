import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  shop:any[]=[];

  constructor(private http:HttpClient) {
    this.cargarShop();
   }

   private cargarShop(){
    const url = 'https://atlas-5fdc7-default-rtdb.firebaseio.com/tienda.json';
    this.http.get(url).subscribe((resp: any) => {
    this.shop = resp;
    });
}
}
