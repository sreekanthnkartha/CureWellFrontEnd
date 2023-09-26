import { Component } from '@angular/core';
import { SurgeryModel } from 'src/Models/surgery';
import { SurgeryService } from 'src/Services/surgery.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-todays-surgery',
  templateUrl: './view-todays-surgery.component.html',
  styleUrls: ['./view-todays-surgery.component.css']
})
export class ViewTodaysSurgeryComponent {
  startTime:string;
  endTime:string;

  convertDecimalToTime(decimalValue: number): string {
    let hours = Math.floor(decimalValue);
    const minutes = Math.round((decimalValue - hours) * 60);
    let period = 'AM';
  
    if (hours >= 12) {
      period = 'PM';
      if (hours > 12) {
        hours -= 12;
      }
    }
  
    if (hours === 0) {
      hours = 12;
    }
  
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${period}`;
  }
  
  TodaysSurgeryList:SurgeryModel[]|null=null;

  constructor(private surgeryService:SurgeryService,private router: Router){
    surgeryService.getAllSurgeriesForToday().subscribe(
      surgeries => {this.TodaysSurgeryList = surgeries;
      }
    );
  }

  
  editSurgery(surgery: SurgeryModel): void {
    
    this.router.navigate(['/updateSurgery', surgery.SurgeryId]);
  }
}
