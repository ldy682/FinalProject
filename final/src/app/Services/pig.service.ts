import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PigService {
  key: any
  location: any

  constructor(private http: HttpClient, private router: Router) { }
  add(form:any){
    this.location = form.location.replaceAll(" ", "-")
    this.http.post('https://272.selfip.net/apps/jpfG11Tlm6/collections/reports/documents/',
    {"key":`${form.formName}`, 
    "data": {
    "phone": `${form.phNum}`,
    "breed": `${form.breed}`,
    "pid": `${form.pID}`,
    "location": `${this.location}`,
    "longitude": `${form.longitude}`, 
    "latitude" :`${form.latitude}`,
    "details": `${form.moreDetails}`,
    "time": `${form.time}`,
    "status": `${form.status}`}}
    ).subscribe((data:any)=>{
      })
      setTimeout(()=>this.router.navigate(['']),1000)
    
    
  }
  delete(id:any){
    this.http.delete(`https://272.selfip.net/apps/jpfG11Tlm6/collections/reports/documents/${id}`)
      .subscribe((data:any)=>{
      })
  }

  deleteLocations(loc:any){
    this.http.delete(`https://272.selfip.net/apps/jpfG11Tlm6/collections/locations/documents/${loc}`)
    .subscribe((data:any)=>{
    })
  }
  
  claim(id:any){
    this.http.put(`https://272.selfip.net/apps/jpfG11Tlm6/collections/reports/documents/${id.key}`, 
    {"key":`${id.key}`, 
    "data": {
    "phone": `${id.data.phone}`,
    "breed": `${id.data.breed}`,
    "pid": `${id.data.pid}`,
    "location": `${id.data.location}`,
    "longitude": `${id.data.longitude}`, 
    "latitude" :`${id.data.latitude}`,
    "details": `${id.data.details}`,
    "time": `${id.data.time}`,
    "status": "claimed"}}
    )
    .subscribe((data:any)=>{
    })
  }

  addLocation(form:any){
    this.key = form.location.replaceAll(" ", "-")
    this.http.post('https://272.selfip.net/apps/jpfG11Tlm6/collections/locations/documents/',
    {"key": `${this.key}`, 
    "data": {
    "longitude": `${form.longitude}`,
    "latitude": `${form.latitude}`}}
    ).subscribe((data:any)=>{
      })
  }
}
