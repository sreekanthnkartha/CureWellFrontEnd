import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Doctor } from 'src/Models/doctor';
import { Doctorspecialization } from 'src/Models/doctorspecialization';
import { DoctorService } from 'src/Services/doctor.service';

@Component({
  selector: 'app-viewspecialization',
  templateUrl: './viewspecialization.component.html',
  styleUrls: ['./viewspecialization.component.css']
})
export class ViewspecializationComponent {
  // Array to hold the list of specializations
  displayDoctors: Doctorspecialization[];

  constructor(private _doctorService: DoctorService, private router: Router) { }

  // Placeholder variables
  DocID: number = 0;
  DocName: string = "";

  // FormGroup for editing doctor information
  editDoctorForm: FormGroup;

  ngOnInit(): void {
    // Fetching list of doctor specializations from the service
    this._doctorService.getDoctorSpec().subscribe(
      (data)=>this.displayDoctors=data
    );
    
    // Logging the fetched data for debugging
    console.log(this.displayDoctors);
    
    // Checking if data is available
    if (this.displayDoctors) {
      console.log("Data loaded successfully");
    }
    else {
      console.log("Error fetching data");
    }
  }
}
