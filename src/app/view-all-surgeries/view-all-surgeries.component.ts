import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SurgeryModel } from 'src/Models/surgery';
import { SurgeryService } from 'src/Services/surgery.service';

@Component({
  selector: 'app-view-all-surgeries',
  templateUrl: './view-all-surgeries.component.html',
  styleUrls: ['./view-all-surgeries.component.css']
})
export class ViewAllSurgeriesComponent {
  startTime: string; 
  endTime: string;   

  // Function to convert decimal value to formatted time string
  convertDecimalToTime(decimalValue: number): string {
    let hours = Math.floor(decimalValue);
    const minutes = Math.round((decimalValue - hours) *100);
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
  
  SurgeryList: SurgeryModel[] | null = null; // List of surgeries for today

  constructor(private surgeryService: SurgeryService, private router: Router) {
    // Fetching all surgeries for today from the service
    surgeryService.getAllSurgeries().subscribe(
      surgeries => {
        this.SurgeryList = surgeries;
      }
    );
  }
}
