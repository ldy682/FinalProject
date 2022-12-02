import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { PigFormComponent } from './Components/pig-form/pig-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'form', component: PigFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
