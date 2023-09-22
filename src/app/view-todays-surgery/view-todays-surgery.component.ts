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
  TodaysSurgeryList:SurgeryModel[]|null=null;

  constructor(private surgeryService:SurgeryService,private router: Router){
    surgeryService.getAllSurgeriesForToday().subscribe(
      surgeries => {this.TodaysSurgeryList = surgeries;
      console.log(this.TodaysSurgeryList);
      }
    );
  }
  editSurgery(surgery: SurgeryModel): void {
    
    this.router.navigate(['/updateSurgery', surgery.SurgeryId]);
  }
}
