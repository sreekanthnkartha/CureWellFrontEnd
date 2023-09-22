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
  displayDoctors: Observable<Doctor[]>;

  constructor(private _doctorService: DoctorService, private router: Router) { }

  DocID: number = 0;
  DocName: string = "";

  editDoctorForm: FormGroup;

  ngOnInit(): void {
    console.log("he");
    this.displayDoctors = this._doctorService.getDoctors();
    if (this.displayDoctors) {
      console.log("hello");
    }
    else {
      console.log("error");
    }
  }
  removedoc(id:number): void{
    console.log(id);    
    this._doctorService.DeleteDoctor(id);
    this.ngOnInit();
  }
}
