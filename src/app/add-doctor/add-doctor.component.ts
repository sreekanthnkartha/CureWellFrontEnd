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
  AddDoctorForm: FormGroup; // Form group for adding a doctor
  docService: DoctorService; // Service for doctor-related operations


  constructor(private doc:DoctorService,private fb:FormBuilder) {
    this.docService=doc
    
  }
  
  ngOnInit(): void {
    this.AddDoctorForm=this.fb.group({
      DoctorName:['',[Validators.required]]
    })
  }

  // Function to handle form submission
  onSubmit() {
    // Creating a new Doctor instance and assigning the value from the form
    let d: Doctor = new Doctor();
    d.DoctorName = this.AddDoctorForm.value.DoctorName;

    // Logging the doctor name and adding it through the DoctorService
    console.log(d.DoctorName);
    this.docService.AddNewDoctor(d);
  }
}
