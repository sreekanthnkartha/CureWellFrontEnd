import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from 'src/Models/doctor';
import { DoctorService } from 'src/Services/doctor.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-view-doctor',
  templateUrl: './view-doctor.component.html',
  styleUrls: ['./view-doctor.component.css']
})
export class ViewDoctorComponent {
  displayDoctors: Doctor[];

  constructor(private _doctorService: DoctorService, private router: Router) { }

  DocID: number = 0;
  DocName: string = "";

  editDoctorForm: FormGroup;

  ngOnInit(): void {
    console.log("he");
    this._doctorService.getDoctors().subscribe(
      (data) => this.displayDoctors = data
    );
  }
  removeDoc(name: string, id: number): void {
    if (confirm("Are you sure to delete " + name)) {
      // console.log(id);    
      this._doctorService.DeleteDoctor(id);
      let fnd: Doctor = this.displayDoctors.find(i => i.DoctorID == id);
      let ind: number = this.displayDoctors.indexOf(fnd);
      // console.log(ind);
      this.displayDoctors.splice(ind, 1);
    }
  }
}
