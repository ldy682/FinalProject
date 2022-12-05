import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  static unlock: boolean = false;
  constructor() { }
  open(){
   FormService.unlock = true
  }
  close(){
    FormService.unlock = false;
  }
  permission(){
    return FormService.unlock
  }
}
