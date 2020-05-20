import {NgModule}  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from '../booking/booking.component';
import { HomeComponent } from '../home/home.component';
import { GalleryComponent } from '../gallery/gallery.component';

const routes: Routes = [
 {path : '', component : HomeComponent},
 {path : 'booking', component : BookingComponent},
 {path : 'gallery', component : GalleryComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
