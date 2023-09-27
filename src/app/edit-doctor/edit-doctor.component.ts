import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/Models/doctor';
import { DoctorService } from 'src/Services/doctor.service';

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.css']
})
export class EditDoctorComponent {
  constructor(private _doctorService: DoctorService, private _activatedRoute: ActivatedRoute, private _router: Router, private fb: FormBuilder) { }

  // Define form and variables
  doctorById: Doctor = new Doctor();
  editDoctorForm: FormGroup;
  docID: number = 0; // variable for holding Doctor ID
  docName: string = ""; // variable for holding Doctor Name
  phoneNo: string = ""; // variable for holding Phone No

  ngOnInit(): void {
    // Get the doctor ID and name from route parameters
    this.docID = +this._activatedRoute.snapshot.paramMap.get('id');

    console.log("fdhgfdh"+this.docID);

    this._doctorService.getDoctorById(this.docID).subscribe(
      data => {
        this.doctorById = data;
        this.docName = this.doctorById.DoctorName;
        this.phoneNo = this.doctorById.PhoneNo;
        console.log(this.doctorById);
        this.editDoctorForm.patchValue(data);
      }
    );
    this.initForm();
  }  

  initForm(): void{
    // console.log("fgfg"+this.docID+this.docName+this.phoneNo);
    this.editDoctorForm = this.fb.group({
      DoctorID: [{value: this.docID, disabled: true}],
      DoctorName:['',[Validators.required]],
      PhoneNo:['',[Validators.required,Validators.pattern(/^[0-9]*$/)]]
    });
    // console.log(this.docID);
  }

  // Handle form submission
  onSubmit() { 
    // Create a Doctor object and populate it with form values
    let doctor: Doctor = new Doctor();

    doctor.DoctorID = this.docID;
    doctor.DoctorName = this.editDoctorForm.value.DoctorName;
    doctor.PhoneNo = this.editDoctorForm.value.PhoneNo;

    // Call the service to edit doctor details and navigate to the showAllDoctors route
    this._doctorService.editDoctorDetails(doctor.DoctorID, doctor);

    // Route back to the showAllDoctors route
    this._router.navigate(['/showAllDoctors']);
  }

  // Handle cancel action by navigating to the showAllDoctors route
  onCancel(){
    this._router.navigate(['/showAllDoctors']);
  }
}
