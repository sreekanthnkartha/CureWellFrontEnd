import { NgModule } from '@angular/core';
import { ViewTodaysSurgeryComponent } from './view-todays-surgery/view-todays-surgery.component';
import { UpdateSurgeryComponent } from './update-surgery/update-surgery.component';
import { ViewDoctorComponent } from './view-doctor/view-doctor.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'showAllDoctors', component: ViewDoctorComponent },
  { path: 'viewTodaysSurgery', component:  ViewTodaysSurgeryComponent},
  { path: 'updateSurgery', component:  UpdateSurgeryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
