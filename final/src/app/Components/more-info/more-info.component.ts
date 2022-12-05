import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.css']
})


export class MoreInfoComponent implements OnInit {
  key:any
  report:any
  constructor(private route: ActivatedRoute, private http: HttpClient){

  }

  ngOnInit(): void {
    this.key = this.route.snapshot.paramMap.get("key")
    this.report = this.getReport(this.key)
  }
  getReport(key:any){
    this.http.get(`https://272.selfip.net/apps/jpfG11Tlm6/collections/reports/documents/${key}/`)
    .subscribe((data:any)=>{
      this.report = data;
  })
  }
  
}
