import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PhoneListComponent } from './components/phone-list/phone-list.component';
import { FormsModule } from '@angular/forms';
import { PhonedetailsComponent } from './components/phonedetails/phonedetails.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { MovielistingComponent } from './components/movielisting/movielisting.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviedetailsComponent } from './components/moviedetails/moviedetails.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PhoneListComponent,
    PhonedetailsComponent,
    ContactusComponent,
    AboutusComponent,
    MovielistingComponent,
    MoviedetailsComponent,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
