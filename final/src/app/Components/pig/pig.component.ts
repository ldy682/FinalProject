import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PigService } from 'src/app/Services/pig.service';

@Component({
  selector: 'app-pig',
  templateUrl: './pig.component.html',
  styleUrls: ['./pig.component.css']
})
export class PigComponent implements OnInit{
  @Input() report:any
  @Output() delete = new EventEmitter()
  constructor(){

  }
  ngOnInit(): void {
    
  }
}
