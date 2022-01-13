import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { Produit } from 'src/app/models/produit';
import { ProduitService } from 'src/app/services/produit.service';
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})

export class ProduitsComponent implements OnInit {


  
  produitw ="";
  produitF ='';
  p: number = 1;
  produits : Produit[] = [];
  produitselect : Produit[] = [];
  resultproduits : Produit[] = [];
  
  constructor(private produitService: ProduitService ) {}
 
  ngOnInit(): void {
    this.getProduits();
    this.getProduitselect();
    
  }

  getProduits(){
    this.produitService.findaAll().subscribe(produits => {
      this.resultproduits = this.produits = produits;
    }); 
  }

  getProduitselect(){  
    this.produitService.findaAll().subscribe(produitselect => {
      this.produitselect = produitselect.filter((value, index, self) => self.findIndex((m) => m.category === value.category) === index);
    }); 
  }
  



  searchProduits(){
    if(this.produitw == "All category"){
      this.getProduits();
    }else{
    this.resultproduits = this.produits.filter((produit) => produit.category.toLowerCase().includes(this.produitw.toLowerCase()))
    }
  }

  searchProduitsF(){

    if(this.produitF == ""){
      this.getProduits();
    }else{
    this.resultproduits = (this.produits.filter((produit) => [produit.price.toString(),produit.rating.rate.toString()].includes(this.produitF)));
    }
    // this.resultproduits = this.produits.filter((produit) => produit.rating.rate.toString().includes(this.produitF));
    // this.resultproduits = this.produits.filter((produit) => produit.rating.count.toString().includes(this.produitF));
  }


  triprice(){
    this.resultproduits.sort((a, b) => (a.price > b.price) ? 1 : -1)
  }
  trirate(){
    this.resultproduits.sort((a, b) => (a.rating.rate < b.rating.rate) ? 1 : -1)
  }




}
