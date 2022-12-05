import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { PigFormComponent } from './Components/pig-form/pig-form.component';
import { MoreInfoComponent } from './Components/more-info/more-info.component';
import { AddReportGuard } from './add-report.guard';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'form', component: PigFormComponent, canActivate: [AddReportGuard]},
  { path: 'info/:key', component: MoreInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
