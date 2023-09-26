import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/Models/doctor';
import { DoctorService } from 'src/Services/doctor.service';

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.css']
})
export class EditDoctorComponent {
  constructor(private _doctorService: DoctorService, private _activatedRoute: ActivatedRoute, private _router: Router) { }

  // Define form and variables
  editDoctorForm: FormGroup;
  docID: number = 0; // variable for holding Doctor ID
  docName: string = ""; // variable for holding Doctor Name

  ngOnInit(): void {
    // Get the doctor ID and name from route parameters
    this.docID = parseInt(this._activatedRoute.snapshot.paramMap.get('id') || '0', 10);
    this.docName = this._activatedRoute.snapshot.paramMap.get('name') || '';

    // Create a form group with initial values
    this.editDoctorForm = new FormGroup({
      DoctorID: new FormControl({value:this.docID, disabled:true}),
      DoctorName: new FormControl(this.docName)
    });
  }  

  // Handle form submission
  onSubmit() { 
    // Create a Doctor object and populate it with form values
    let doctor: Doctor = new Doctor();

    doctor.DoctorID = this.docID;
    doctor.DoctorName = this.editDoctorForm.value.DoctorName;

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
