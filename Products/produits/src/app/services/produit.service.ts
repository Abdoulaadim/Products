import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produit } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http: HttpClient) { }

  apiUrl = "https://fakestoreapi.com/products";

  findaAll(){
    return this.http.get<Produit[]>(this.apiUrl);
  }
}
