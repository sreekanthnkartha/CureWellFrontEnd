import { NgModule } from '@angular/core';
import { ViewTodaysSurgeryComponent } from './view-todays-surgery/view-todays-surgery.component';
import { UpdateSurgeryComponent } from './update-surgery/update-surgery.component';
import { ViewDoctorComponent } from './view-doctor/view-doctor.component';
import { RouterModule, Routes } from '@angular/router';
import { EditDoctorComponent } from './edit-doctor/edit-doctor.component';
import { ViewspecializationComponent } from './viewspecialization/viewspecialization.component';
import { ViewDoctorBySpecializationComponent } from './view-doctor-by-specialization/view-doctor-by-specialization.component';

const routes: Routes = [
  { path: 'showAllDoctors', component: ViewDoctorComponent },
  { path: 'editDoctor/:id/:name', component: EditDoctorComponent },
  { path: 'viewTodaysSurgery', component:  ViewTodaysSurgeryComponent},
  { path: 'updateSurgery', component:  UpdateSurgeryComponent}, 
  { path: 'showAllSpecializations', component:  ViewspecializationComponent},
  { path: 'showdoctorbyspecialization/:code', component: ViewDoctorBySpecializationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
