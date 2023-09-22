import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewTodaysSurgeryComponent } from './view-todays-surgery/view-todays-surgery.component';
import { UpdateSurgeryComponent } from './update-surgery/update-surgery.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';

const routes: Routes = [
  { path: 'viewTodaysSurgery', component:  ViewTodaysSurgeryComponent},
  { path: 'updateSurgery/:id', component:  UpdateSurgeryComponent},
  {path:'addDoctor',component:AddDoctorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
