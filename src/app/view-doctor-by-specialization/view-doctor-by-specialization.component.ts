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
  displayDoctors: Doctor[];

  constructor(private _doctorService: DoctorService, private router: Router, private _activatedRoute: ActivatedRoute) { }

  DocID: number = 0;
  DocName: string = "";
  code:string;

  ngOnInit(): void {
    this.code=this._activatedRoute.snapshot.paramMap.get('code') || '';
    console.log(this.code);
    this._doctorService.getdoctorbyspecialization(this.code).subscribe(
      (data)=>this.displayDoctors=data
    );
    if (this.displayDoctors) {
      console.log("hello");
    }
    else {
      console.log("error");
    }
  }
}
