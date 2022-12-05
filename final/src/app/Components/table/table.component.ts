import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PigService } from 'src/app/Services/pig.service';
import { FormService } from 'src/app/Services/form.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
  reports:any = [];
  clicked:boolean = false
  arr:any = []
  filter:any = "Default Filter"



  constructor(private ps: PigService, private http: HttpClient, private guard: FormService){}
  get(){
    this.http.get<Object>('https://272.selfip.net/apps/jpfG11Tlm6/collections/reports/documents/')
    .subscribe((data:any)=>{
      this.reports = data
    })
  }

  changeFilters(evt:any){
    if(evt.target.value == "reported by"){
      var sortedReports = this.reports.sort((a:any, b:any)=>{
        if(a.key.toLowerCase()==b.key.toLowerCase())
        return 0

        return a.key.toLowerCase()>b.key.toLowerCase()?1:-1
      })
      this.reports = sortedReports
    }
    else if(evt.target.value == "location"){
      let sortedReports = this.reports.sort((a:any, b:any)=>{
        if(a.data.location.toLowerCase()==b.data.location.toLowerCase())
        return 0

        return a.data.location.toLowerCase()>b.data.location.toLowerCase()?1:-1
      })
      
    }
      
    // }
    else if(evt.target.value == "time"){
      this.reports.sort((a:any, b:any)=>{
        if(a.data.time==b.data.time)
        return 0

        return a.data.time>b.data.time?1:-1
      })
    }
    else if(evt.target.value == "status"){
      this.reports.sort((a:any, b:any)=>{
        if(a.data.status==b.data.status)
        return 0
        return a.data.status>b.data.status?1:-1
      })
    }
    // else{
      
    // }
  }

  stringSort(a:string,b:string){
    if(a===b)
    {
      return 0
    }
    return a>b?1:-1
  }


  ngOnInit() {
    this.get()
  }

 
  deleteReport(key:any){
    let password = prompt("Enter correct password to delete")
    let pass = "84892b91ef3bf9d216bbc6e88d74a77c"
    this.http.get<Object>(`https://api.hashify.net/hash/md5/hex?value=${password}`)
    .subscribe((data:any)=>{
      if(data.Digest === pass){
        this.ps.delete(key)
        this.reports = this.reports.filter((report:any)=>report.key!=key)
        alert("deleted report created by " + key)
      }
      else{
        alert("wrong password")
      }
    })
  }

  changeStatus(details:any, evt:any){
    let password = prompt("Enter correct password to claim")
    let pass = "84892b91ef3bf9d216bbc6e88d74a77c"
    this.http.get<Object>(`https://api.hashify.net/hash/md5/hex?value=${password}`)
    .subscribe((data:any)=>{
      if(data.Digest === pass){
        this.ps.claim(details)
        evt.target.disabled=true;
        evt.target.innerHTML="Claimed"+"&nbsp;"+"&nbsp;";
        alert("Claimed report by " + details.key)
      }
      else{
        alert("wrong password")
      }
    })
  }
  
  unlockGuard(){
    this.guard.open();
  }
  
}
