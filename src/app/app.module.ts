import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CustomMaterialModule } from './core/material.module';
import { AppRoutingModule } from './core/app.routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {MatSelectModule} from "@angular/material/select";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { HomeComponent } from './home/home.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {SlideshowModule} from 'ng-simple-slideshow';
import { BookingComponent } from './booking/booking.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { BookService } from './shared/book.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookingComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    AppRoutingModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatGridListModule,
    SlideshowModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase), // Main Angular fire module 
    AngularFireDatabaseModule 
 
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
