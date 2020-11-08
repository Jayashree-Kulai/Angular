import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhoneListComponent } from './components/phone-list/phone-list.component';
import { PhonedetailsComponent } from './components/phonedetails/phonedetails.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { MovielistingComponent } from './components/movielisting/movielisting.component';
import { MoviedetailsComponent } from './components/moviedetails/moviedetails.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : '/allPhones',
    pathMatch : 'full'
  },

  {
    path : 'allPhones',
    component : PhoneListComponent
  },

  {
    path : 'phone/:phoneid',
    component : PhonedetailsComponent
  },

  {
    path : 'about-us',
    component : AboutusComponent
  },

  {
    path : 'contact-us',
    component : ContactusComponent
  },
  {
    path : 'movies',
    component : MovielistingComponent
  },
  { 
    path: 'movie/:id', 
    component: MoviedetailsComponent
  },
  {
    path : 'wish-list',
    component : WishlistComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
