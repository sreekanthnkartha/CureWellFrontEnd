import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewTodaysSurgeryComponent } from './view-todays-surgery/view-todays-surgery.component';
import { UpdateSurgeryComponent } from './update-surgery/update-surgery.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewDoctorComponent } from './view-doctor/view-doctor.component';
import { EditDoctorComponent } from './edit-doctor/edit-doctor.component';
import { ViewspecializationComponent } from './view-specialization/viewspecialization.component';
import { ViewDoctorBySpecializationComponent } from './view-doctor-by-specialization/view-doctor-by-specialization.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewTodaysSurgeryComponent,
    UpdateSurgeryComponent,
    AddDoctorComponent,
    ViewDoctorComponent,
    EditDoctorComponent,
    ViewspecializationComponent,
    ViewDoctorBySpecializationComponent,
    AddDoctorComponent,
    AddDoctorComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
