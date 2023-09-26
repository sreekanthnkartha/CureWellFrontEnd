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

  updateSurgeryForm:FormGroup;
  surgery: SurgeryModel; 
  surgeryService:SurgeryService;
  startTime:string;
  endTime:String;

  convertDecimalToTime(decimalValue: number):string {
    const hours = Math.floor(decimalValue);
    const minutes = (decimalValue - hours) * 60;
    return(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`);
  }

  convertTimeToDecimal(timeString: string): number {
    const [time, period] = timeString.split(' ');
    const [hours, minutes] = time.split(':').map(Number);
    
    let decimalValue = hours + minutes / 60;
  
    if (period && period.toLowerCase() === 'pm') {
      decimalValue += 12;
    }
    console.log(decimalValue);
    return decimalValue;
  }
  

  constructor(private ser:SurgeryService,private fb: FormBuilder,private route: ActivatedRoute,private router: Router) { 
    this.surgeryService =ser;
  }

  ngOnInit(): void {
    const surgeryId = +this.route.snapshot.paramMap.get('id');
  
    this.surgeryService.getSurgeryById(surgeryId).subscribe(
      surgery => {
        this.surgery = surgery;
        console.log(this.surgery);
        this.initForm();
      },
      error => {
        console.error('Error fetching surgery:', error);
        // Handle error (e.g., show error message to user)
      }
    );
  }

  initForm(): void {
    this.startTime =this.convertDecimalToTime(this.surgery.StartTime);
    this.endTime = this.convertDecimalToTime(this.surgery.EndTime);
    
    this.updateSurgeryForm = this.fb.group({
      surgeryId: [{value: this.surgery.SurgeryId, disabled: true}],
      doctorID: [{value:this.surgery.DoctorID,disabled: true}],
      startTime: [this.startTime, [Validators.required, Validators.min(0), Validators.max(24)]],
      endTime: [this.endTime, [Validators.required, Validators.min(0), Validators.max(24)]],
      surgeryCategory: [{value:this.surgery.SurgeryCategory,disabled:true}],
      surgeryDate: [{value:this.surgery.SurgeryDate.toString().slice(0,10),disabled:true}]
    });
  }

  submitForm() {
    if (this.updateSurgeryForm.valid) {
      const formValue = this.updateSurgeryForm.value;

      let surgeryModel:SurgeryModel = new SurgeryModel();

      surgeryModel.SurgeryId=this.surgery.SurgeryId; 
      surgeryModel.DoctorID=this.surgery.DoctorID;
      surgeryModel.StartTime=this.convertTimeToDecimal(formValue.startTime);
      surgeryModel.EndTime=this.convertTimeToDecimal(formValue.endTime);
      surgeryModel.SurgeryDate=this.surgery.SurgeryDate;
      surgeryModel.SurgeryCategory=this.surgery.SurgeryCategory;

      if (surgeryModel.StartTime >= surgeryModel.EndTime) {
        alert("Start Time can not be greater than or equal to end time!");
      } else {
        this.surgeryService.updateSurgery(surgeryModel);
        this.router.navigate(['/viewTodaysSurgery']);
      }
    }
  }

  goBack() {
    this.router.navigate(['/viewTodaysSurgery']);
  }
}
