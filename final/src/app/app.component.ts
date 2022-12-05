import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FormService } from './Services/form.service';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Pig Tracker';

  constructor(private http: HttpClient, private unlock: FormService, location: PlatformLocation){
    location.onPopState(()=>{
      console.log("testing")
      this.unlock.close();
    }) 
  }
  ngOnInit(){
    
  }
  

}
