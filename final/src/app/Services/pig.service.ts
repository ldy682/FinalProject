import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PigService {
  reports = []
  reqStatus:string = "default";

  constructor(private http: HttpClient) { }
  add(){

    this.http.post('https://272.selfip.net/apps/jpfG11Tlm6/collections/',
    {"key":"mykey2", "data":"myvalue"}
    ).subscribe((data:any)=>{
      console.log(data)
      })
    
  }
  delete(id:string){
    this.http.delete(`https://272.selfip.net/apps/jpfG11Tlm6/collections/${id}/`)
      .subscribe(()=> this.reqStatus = "sucessful delete")
    console.log(this.reqStatus)
  }
  get(){
    this.http.get<Object>('https://272.selfip.net/apps/jpfG11Tlm6/collections/mykey2/documents/')
    .subscribe((data:any)=>{
      this.reports = data
      console.log(this.reports)
    })
    return this.reports
  }
  testing(){
    console.log(this.reqStatus)
  }
}
