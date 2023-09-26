import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Doctor } from 'src/Models/doctor';
import { DoctorService } from 'src/Services/doctor.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent {

  AddDoctorForm=new FormGroup({
    DoctorName:new FormControl()
  })

  docService:DoctorService;

  constructor(private doc:DoctorService) {
    this.docService=doc
    
  }

  onSubmit(){
    let d:Doctor=new Doctor();
    d.DoctorName=this.AddDoctorForm.value.DoctorName;
    console.log(d.DoctorName);
    this.docService.AddNewDoctor(d);
  }

}
