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

  // updateSurgeryForm= new FormGroup(
  //   {
  //     surgeryID:new FormControl()
  //     doctorID: new FormControl(),
  //     startTime: new FormControl(),
  //     endTime: new FormControl(),
  //     surgeryCategory: new FormControl(),
  //     surgeryDate: new FormControl()
  //   }
  // )
  updateSurgeryForm:FormGroup;
  surgery: SurgeryModel; 
  surgeryService:SurgeryService;
  

  constructor(private ser:SurgeryService,private fb: FormBuilder,private route: ActivatedRoute,private router: Router) { 
    this.surgeryService =ser;
  }

  ngOnInit(): void {
    const surgeryId = +this.route.snapshot.paramMap.get('id');
    

    this.surgeryService.getSurgeryById(surgeryId).subscribe(
      surgery => {
        this.surgery = surgery;
        
        this.initForm();
      },
      error => {
        console.error('Error fetching surgery:', error);
        // Handle error (e.g., show error message to user)
      }
    );
  }

  initForm(): void {
    
    this.updateSurgeryForm = this.fb.group({
      surgeryId: [{value: this.surgery.SurgeryId, disabled: true}],
      doctorID: [{value:this.surgery.DoctorID,disabled: true}],
      startTime: [this.surgery.StartTime, [Validators.required, Validators.min(0), Validators.max(24)]],
      endTime: [this.surgery.EndTime, [Validators.required, Validators.min(0), Validators.max(24)]],
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
      surgeryModel.StartTime=formValue.startTime;
      surgeryModel.EndTime=formValue.endTime;
      surgeryModel.SurgeryDate=this.surgery.SurgeryDate;
      surgeryModel.SurgeryCategory=this.surgery.SurgeryCategory;

      if (surgeryModel.StartTime >= surgeryModel.EndTime) {
        alert("Start Time can not be greater than or equal to end time!");
      } else {
        this.surgeryService.updateSurgery(surgeryModel);
      }
    }
  }

  goBack() {
    this.router.navigate(['/viewTodaysSurgery']);
  }
}
