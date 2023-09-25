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
  displayDoctors: Doctorspecialization[];

  constructor(private _doctorService: DoctorService, private router: Router) { }

  DocID: number = 0;
  DocName: string = "";

  editDoctorForm: FormGroup;

  ngOnInit(): void {
    console.log("he");
    this._doctorService.getDoctorSpec().subscribe(
      (data)=>this.displayDoctors=data
    );
    console.log(this.displayDoctors);
    
    if (this.displayDoctors) {
      console.log("hello");
    }
    else {
      console.log("error");
    }
  }
}
