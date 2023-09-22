import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Doctor } from 'src/Models/doctor';
import { DoctorServiceService } from 'src/Services/doctor-service.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {

  AddDoctorForm=new FormGroup({
    DoctorName:new FormControl()
  })

  docService:DoctorServiceService;

  /**
   *
   */
  constructor(private doc:DoctorServiceService) {
    this.docService=doc
    
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  onSubmit(){
    let d:Doctor=new Doctor();
    d.DoctorName=this.AddDoctorForm.value.DoctorName;
    console.log(d.DoctorName);
    this.docService.AddNewDoctor(d);
  }

}
