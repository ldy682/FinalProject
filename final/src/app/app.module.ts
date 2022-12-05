import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TableComponent } from './Components/table/table.component';
import { HomeComponent } from './Components/home/home.component';
import { PigFormComponent } from './Components/pig-form/pig-form.component';
import { PigComponent } from './Components/pig/pig.component';
import { MoreInfoComponent } from './Components/more-info/more-info.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    HomeComponent,
    PigFormComponent,
    PigComponent,
    MoreInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    ReactiveFormsModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
