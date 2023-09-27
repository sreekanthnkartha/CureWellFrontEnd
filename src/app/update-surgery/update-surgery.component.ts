import { Component,OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators  } from '@angular/forms';
import { SurgeryModel } from 'src/Models/surgery';
import { SurgeryService } from 'src/Services/surgery.service';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-update-surgery',
  templateUrl: './update-surgery.component.html',
  styleUrls: ['./update-surgery.component.css']
})
export class UpdateSurgeryComponent {

  updateSurgeryForm: FormGroup;
  surgery: SurgeryModel;
  surgeryService: SurgeryService;
  startTime: string;
  endTime: String;

  // Function to convert decimal value to time string (HH:mm)
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

  // Function to convert time string (HH:mm AM/PM) to decimal value
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

  constructor(private ser: SurgeryService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router) {
    this.surgeryService = ser;
  }

  ngOnInit(): void {
    const surgeryId = +this.route.snapshot.paramMap.get('id');

    // Fetch surgery details by ID
    this.surgeryService.getSurgeryById(surgeryId).subscribe(
      surgery => {
        this.surgery = surgery; // Assign fetched surgery details
        console.log(this.surgery);
        this.initForm(); // Initialize the update form with surgery details
      },
      error => {
        console.error('Error fetching surgery:', error);
        // Handle error (e.g., show error message to user)
      }
    );
  }

  // Function to initialize the update form with surgery details
  initForm(): void {
    this.startTime = this.convertDecimalToTime(this.surgery.StartTime);
    this.endTime = this.convertDecimalToTime(this.surgery.EndTime);

    this.updateSurgeryForm = this.fb.group({
      surgeryId: [{value: this.surgery.SurgeryId, disabled: true}], // Surgery ID (read-only)
      doctorID: [{value: this.surgery.DoctorID, disabled: true}], // Doctor ID (read-only)
      startTime: [this.startTime.slice(0,5), [Validators.required, Validators.min(0), Validators.max(24)]], // Start Time input field with validation
      endTime: [this.endTime.slice(0,5), [Validators.required, Validators.min(0), Validators.max(24)]], // End Time input field with validation
      surgeryCategory: [{value: this.surgery.SurgeryCategory, disabled: true}], // Surgery Category (read-only)
      surgeryDate: [{value: this.surgery.SurgeryDate.toString().slice(0,10), disabled: true}] // Surgery Date (read-only)
    });
  }

  // Function to handle form submission
  submitForm() {
    if (this.updateSurgeryForm.valid) {
      const formValue = this.updateSurgeryForm.value;
      let surgeryModel: SurgeryModel = new SurgeryModel();

      // Assign form values to the surgery model
      surgeryModel.SurgeryId = this.surgery.SurgeryId;
      surgeryModel.DoctorID = this.surgery.DoctorID;
      surgeryModel.StartTime = this.convertTimeToDecimal(formValue.startTime);
      surgeryModel.EndTime = this.convertTimeToDecimal(formValue.endTime);
      surgeryModel.SurgeryDate = this.surgery.SurgeryDate;
      surgeryModel.SurgeryCategory = this.surgery.SurgeryCategory;

      // Validate start time and end time
      if (surgeryModel.StartTime >= surgeryModel.EndTime) {
        alert("Start Time can not be greater than or equal to end time!");
      } else {
        // Update surgery details
        console.log(surgeryModel);
        this.surgeryService.updateSurgery(surgeryModel);
      }
    }
  }

  // Function to navigate back to view today's surgeries
  goBack() {
    this.router.navigate(['/viewTodaysSurgery']);
  }
}