import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/Models/doctor';
import { DoctorService } from 'src/Services/doctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-doctor',
  templateUrl: './view-doctor.component.html',
  styleUrls: ['./view-doctor.component.css']
})

export class ViewDoctorComponent implements OnInit {
  // Array to store the displayed doctors
  displayDoctors: Doctor[];

  constructor(private _doctorService: DoctorService, private router: Router) { }

  ngOnInit(): void {
    // Fetch doctors from the service and subscribe to the data
    this._doctorService.getDoctors().subscribe(
      (data) => {
        this.displayDoctors = data;
        this.displayDoctors.forEach(element => {
          element.ShowPhone = false;
        });
      }
    );
  }

  showHidePhone(index: number){
    this.displayDoctors[index].ShowPhone = !this.displayDoctors[index].ShowPhone;
  }

  // Method to remove a doctor by ID
  removeDoc(name: string, id: number): void {
    // Prompt the user to confirm the deletion
    if (confirm("Are you sure to delete " + name)) {
      // Call the service to delete the doctor
      this._doctorService.DeleteDoctor(id);

       // Find the doctor in the displayed list
      let fnd: Doctor = this.displayDoctors.find(i => i.DoctorID == id);

      // Get the index of the found doctor and remove it from the list
      let ind: number = this.displayDoctors.indexOf(fnd);
      this.displayDoctors.splice(ind, 1);
      
      
    }
  }
}
