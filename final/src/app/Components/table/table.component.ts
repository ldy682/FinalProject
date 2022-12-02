import { Component, OnInit } from '@angular/core';
import { PigService } from 'src/app/Services/pig.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
  pigs:any[] = [];

  constructor(private ps: PigService){}
  ngOnInit() {
    // this.pigs = this.ps.get()
  }
}
