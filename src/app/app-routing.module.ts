import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewTodaysSurgeryComponent } from './view-todays-surgery/view-todays-surgery.component';
import { UpdateSurgeryComponent } from './update-surgery/update-surgery.component';
import { ViewDoctorComponent } from './view-doctor/view-doctor.component';
import { EditDoctorComponent } from './edit-doctor/edit-doctor.component';
import { ViewspecializationComponent } from './view-specialization/viewspecialization.component';
import { ViewDoctorBySpecializationComponent } from './view-doctor-by-specialization/view-doctor-by-specialization.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { HomeComponent } from './home/home.component';
import { PagenotFoundErrorComponent } from './pagenot-found-error/pagenot-found-error.component';


const routes: Routes = [
  { path: 'showAllDoctors', component: ViewDoctorComponent },
  { path: 'editDoctor/:id/:name', component: EditDoctorComponent },
  { path: 'viewTodaysSurgery', component: ViewTodaysSurgeryComponent },
  { path: 'updateSurgery', component: UpdateSurgeryComponent },
  { path: 'showAllSpecializations', component: ViewspecializationComponent },
  { path: 'showdoctorbyspecialization/:code', component: ViewDoctorBySpecializationComponent },
  { path: 'updateSurgery/:id', component: UpdateSurgeryComponent },
  { path: 'addDoctor', component: AddDoctorComponent },
  { path: 'Home', component: HomeComponent },
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: '**', component: PagenotFoundErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
