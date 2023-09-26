import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/Models/doctor';
import { DoctorService } from 'src/Services/doctor.service';

@Component({
  selector: 'app-view-doctor-by-specialization',
  templateUrl: './view-doctor-by-specialization.component.html',
  styleUrls: ['./view-doctor-by-specialization.component.css']
})
export class ViewDoctorBySpecializationComponent {
  displayDoctors: Doctor[]; // Array to store the list of doctors

  constructor(private _doctorService: DoctorService, private router: Router, private _activatedRoute: ActivatedRoute) { }

  DocID: number = 0; // Placeholder for Doctor ID
  DocName: string = ""; // Placeholder for Doctor Name
  code:string; // Placeholder for specialization code

  ngOnInit(): void {
    this.code=this._activatedRoute.snapshot.paramMap.get('code') || ''; // Retrieve the 'code' parameter from the route path

    // Fetch doctors by specialization using DoctorService
    this._doctorService.getdoctorbyspecialization(this.code).subscribe(
      (data) => this.displayDoctors = data // Assign the retrieved doctors to 'displayDoctors'
    );

    
  }
}
