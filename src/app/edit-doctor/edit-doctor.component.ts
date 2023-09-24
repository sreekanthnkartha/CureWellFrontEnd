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

  editDoctorForm: FormGroup;
  docID: number = 0;
  docName: string = "";

  ngOnInit(): void {
    this.docID = parseInt(this._activatedRoute.snapshot.paramMap.get('id') || '0', 10);
    this.docName = this._activatedRoute.snapshot.paramMap.get('name') || '';

    this.editDoctorForm = new FormGroup({
      DoctorID: new FormControl(this.docID),
      DoctorName: new FormControl(this.docName)
    });
  }  

  onSubmit() { 
    let doctor: Doctor = new Doctor();

    doctor.DoctorID = this.editDoctorForm.value.DoctorID;
    doctor.DoctorName = this.editDoctorForm.value.DoctorName;

    this._doctorService.editDoctorDetails(doctor.DoctorID, doctor);

    this._router.navigate(['/showAllDoctors']);
  }
}
