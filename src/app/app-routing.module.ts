import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewTodaysSurgeryComponent } from './view-todays-surgery/view-todays-surgery.component';

const routes: Routes = [
  { path: 'viewTodaysSurgery', component:  ViewTodaysSurgeryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
