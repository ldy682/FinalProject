import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FormService } from './Services/form.service';

@Injectable({
  providedIn: 'root'
})
export class AddReportGuard implements CanActivate {

  constructor(private pass: FormService, private router: Router){
    
  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this.pass.permission())
      {
        this.router.navigate([''])
      }
    return this.pass.permission();
  }
  
}
