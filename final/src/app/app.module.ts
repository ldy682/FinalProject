import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './Components/table/table.component';
import { ModalComponent } from './Components/modal/modal.component';
import { HomeComponent } from './Components/home/home.component';
import { PigFormComponent } from './Components/pig-form/pig-form.component';
import { PigComponent } from './Components/pig/pig.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ModalComponent,
    HomeComponent,
    PigFormComponent,
    PigComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
