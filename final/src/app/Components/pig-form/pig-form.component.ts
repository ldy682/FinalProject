import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ValidationErrors, FormGroup,FormControl, Validators } from '@angular/forms';
import { PigService } from 'src/app/Services/pig.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pig-form',
  templateUrl: './pig-form.component.html',
  styleUrls: ['./pig-form.component.css']
})
export class PigFormComponent implements OnInit{
  form: FormGroup
  locations: any
  inputLong: any
  inputLat: any
  lock:boolean = false
  
  constructor(private service: PigService, private http: HttpClient){
    let formControls ={
      formName: new FormControl('',[Validators.required, Validators.minLength(2), Validators.maxLength(12)]),
      phNum: new FormControl('',[Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
      breed: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]*')]),
      pID: new FormControl('',[Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
      location: new FormControl('', [Validators.required]),
      longitude: new FormControl('',[Validators.required, Validators.pattern(/[-+]?[0-9]*\.?[0-9]*/), Validators.min(-180), Validators.max(180)]),
      latitude: new FormControl('',[Validators.required, Validators.pattern(/[-+]?[0-9]*\.?[0-9]*/), Validators.min(-90), Validators.max(90)]),
      moreDetails: new FormControl(''),
      time: new FormControl(new Date(new Date().getTime())),
      status: new FormControl("not claimed")
    }
    this.form = new FormGroup(formControls)
    
  }
  // 1234567890
  ngOnInit(): void {
    this.getLocations()
  }
  onSubmit(){
    this.service.add(this.form.value)
    if(!this.lock){
      this.service.addLocation(this.form.value)
    }
  }
  getLocations(){
    this.http.get<Object>('https://272.selfip.net/apps/jpfG11Tlm6/collections/locations/documents/')
    .subscribe((data:any)=>{
      this.locations = data

    })
  }
  checkLocation(evt:any){
    for(let location in this.locations){
      if((evt.target.value) === this.locations[location].key){
        this.lock=true;
        this.inputLat=this.locations[location].data.latitude
        this.inputLong=this.locations[location].data.longitude
        return true
      }
    }
    this.lock=false
    return false
  }
}
