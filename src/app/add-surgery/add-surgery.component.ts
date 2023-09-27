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

  addSurgeryForm: FormGroup;
  surgeryModel: SurgeryModel = new SurgeryModel();
  surgery: SurgeryModel;
  surgeryService: SurgeryService;
  startTime: string;
  endTime: String;
  displayDoctors: Doctor[];
  displayspecialization: Doctorspecialization[];

  convertDecimalToTime(decimalValue: number): string {
    let period:string = 'AM';
    let hours:number  = Math.floor(decimalValue);
    let minutes = Math.round((decimalValue - hours) * 100);
    minutes = Math.min(minutes, 59);

    if(hours>12){
      hours = hours-12;
      period='PM';
    }

    return(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}${period}`);
  }

  convertTimeToDecimal(timeString: string): number {
    const [time, period] = timeString.split(' ');
    const [hours, minutes] = time.split(':').map(Number);

    let decimalValue = hours + minutes / 100;
    if (period && period.toLowerCase() === 'pm') {
      decimalValue += 12;
    }
    console.log(decimalValue);
    return decimalValue;
  }

  constructor(private ser: SurgeryService, private fb: FormBuilder, private router: Router,private _doctorService: DoctorService) {
    this.surgeryService = ser;
  }

  ngOnInit(): void {
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

  submitForm() {
    console.log(this.addSurgeryForm.value);
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

  goBack() {
    this.router.navigate(['/viewTodaysSurgery']);
  }
}