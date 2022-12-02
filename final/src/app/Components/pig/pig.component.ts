import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pig',
  templateUrl: './pig.component.html',
  styleUrls: ['./pig.component.css']
})
export class PigComponent implements OnInit{
  @Input() pig:any
  @Output() delete = new EventEmitter()
  ngOnInit(): void {
    
  }
}
