import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Doctor } from 'src/Models/doctor';
import { DoctorService } from 'src/Services/doctor.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {


  AddDoctorForm:FormGroup
  // AddDoctorForm=new FormGroup({
  //   DoctorName:new FormControl()
  // })

  docService:DoctorService;

  /**
   *
   */
  constructor(private doc:DoctorService,private fb:FormBuilder) {
    this.docService=doc
    
  }
  ngOnInit(): void {
    this.AddDoctorForm=this.fb.group({
      DoctorName:['',[Validators.required]]
    })
    // throw new Error('Method not implemented.');
  }

  onSubmit(){
    let d:Doctor=new Doctor();
    d.DoctorName=this.AddDoctorForm.value.DoctorName;
    console.log(d.DoctorName);
    this.docService.AddNewDoctor(d);
  }

}
