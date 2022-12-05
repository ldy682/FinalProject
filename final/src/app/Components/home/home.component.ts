import { Component, AfterViewInit, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';
import { PigService } from 'src/app/Services/pig.service';

import { icon, Marker } from 'leaflet';
const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = icon({ 
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
Marker.prototype.options.icon = iconDefault; 


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit, OnInit{
  private map: any;
  locations:any;
  reports: any;

  constructor(private service: PigService, private http: HttpClient) { }
  ngOnInit(){
    this.get()
    setTimeout(()=>this.getLocations(), 1000)
    
  }

  ngAfterViewInit(): void { 
    this.map = L.map('map').setView([49.2, -123], 11);

    L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGR5NjgyIiwiYSI6ImNsYjkxMnM4ZjBxanEzbm1tNzNrcm9qcGIifQ.7_KWTqcKqUz8fOU4OfcpzA", {
      maxZoom: 18,
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1
    }).addTo(this.map);
  }

  // L.marker([49.2276, -123.0076]).addTo(this.map)
  // .bindPopup(`<b>Metrotown</b><br />cases reported.`).openPopup();

  // L.marker([49.1867, -122.8490]).addTo(this.map)
  // .bindPopup(`<b>SFU Surrey</b><br />cases reported.`).openPopup();

  getLocations(){
    this.http.get<Object>('https://272.selfip.net/apps/jpfG11Tlm6/collections/locations/documents/')
    .subscribe((data:any)=>{
      this.locations = data
      for(let location of this.locations){
        let num = 0;
        for(let report of this.reports){
          if(report.data.location === location.key){
            num++
          }
        }
        if(num > 0){
          L.marker([location.data.latitude, location.data.longitude]).addTo(this.map)
          .bindPopup(`<b>${location.key}</b><br />${num} cases reported.`).openPopup();
        }
      }
      this.map.setView([49.2, -123], 11)
    })
  }
  get(){
    this.http.get<Object>('https://272.selfip.net/apps/jpfG11Tlm6/collections/reports/documents/')
    .subscribe((data:any)=>{
      this.reports = data

    })
  }
}
