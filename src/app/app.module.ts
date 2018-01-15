import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { DataService } from './data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';/*AO dodalem dla animacji*/
import { FormsModule } from '@angular/forms';/*AO dodalem zeby dzialawo bindowanie na formularzu, one/two directions*/
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WeatherService } from './weather.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [DataService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
