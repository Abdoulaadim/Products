import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProduitsComponent } from './components/produits/produits.component';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProduitsComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    NgbModule,
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
