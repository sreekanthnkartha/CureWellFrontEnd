import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Doctor } from 'src/Models/doctor';
import { Doctorspecialization } from 'src/Models/doctorspecialization';
import { SurgeryModel } from 'src/Models/surgery';
import { DoctorService } from 'src/Services/doctor.service';
import { SurgeryService } from 'src/Services/surgery.service';

@Component({
  selector: 'app-add-surgery',
  templateUrl: './add-surgery.component.html',
  styleUrls: ['./add-surgery.component.css']
})
export class AddSurgeryComponent {


  // Declare class properties
  addSurgeryForm: FormGroup;
  surgeryModel: SurgeryModel = new SurgeryModel();
  surgery: SurgeryModel;
  surgeryService: SurgeryService;
  startTime: string;
  endTime: String;
  displayDoctors: Doctor[];
  displayspecialization: Doctorspecialization[];




  // Function to convert time string to decimal value
  convertTimeToDecimal(timeString: string): number {
    const [time, period] = timeString.split(' ');
    const [hours, minutes] = time.split(':').map(Number);


    let decimalValue = hours + minutes / 100;
    if (period && period.toLowerCase() === 'pm') {
      decimalValue += 12;
    }


    return decimalValue;
  }


  // Constructor with dependency injection
  constructor(private ser: SurgeryService, private fb: FormBuilder, private router: Router,private _doctorService: DoctorService) {
    this.surgeryService = ser;
  }


  // Angular lifecycle hook when component is initialized
  ngOnInit(): void {
    // Initialize form and fetch data from services
    this.addSurgeryForm=this.fb.group({
      DoctorID: [''],
      StartTime: ['', [Validators.required, Validators.min(0), Validators.max(24)]],
      EndTime: ['', [Validators.required, Validators.min(0), Validators.max(24)]],
      SurgeryCategory: [''],
      SurgeryDate: ['']
    });


    this._doctorService.getDoctorSpec().subscribe(
      (data)=>this.displayspecialization=data
    );


    this._doctorService.getDoctors().subscribe(
      (data) => {
        this.displayDoctors = data;
        this.displayDoctors.forEach(element => {
          element.ShowPhone = false;
        });
      }
    );
  }


  // Function to handle form submission
  submitForm() {
    if (this.addSurgeryForm.valid) {
      const formValue = this.addSurgeryForm.value;


      this.surgeryModel.DoctorID = this.addSurgeryForm.value.DoctorID;
      this.surgeryModel.StartTime = this.convertTimeToDecimal(formValue.StartTime);
      this.surgeryModel.EndTime = this.convertTimeToDecimal(formValue.EndTime);
      this.surgeryModel.SurgeryDate = this.addSurgeryForm.value.SurgeryDate;
      this.surgeryModel.SurgeryCategory = this.addSurgeryForm.value.SurgeryCategory;


      if (this.surgeryModel.StartTime >= this.surgeryModel.EndTime) {
        alert("Start Time can not be greater than or equal to end time!");
      } else {
        this.surgeryService.AddNewSurgery(this.surgeryModel);
      }
    }
  }


  // Function to navigate back
  goBack() {
    this.router.navigate(['/viewTodaysSurgery']);
  }
}
