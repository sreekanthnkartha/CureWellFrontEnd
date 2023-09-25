import { Component, OnInit } from '@angular/core';
import { SpecializationModel } from 'src/Models/SpecializationModel';
import { SpecializationService } from 'src/Services/specialization.service';

@Component({
  selector: 'app-show-all-specializations',
  templateUrl: './show-all-specializations.component.html',
  styleUrls: ['./show-all-specializations.component.css']
})
export class ShowAllSpecializationsComponent implements OnInit{
  specializationList:SpecializationModel[] |null=null;
  
  constructor(service:SpecializationService){
    service.getSpetialization().subscribe(specializations=>
      {this.specializationList=specializations})
      console.log(this.specializationList)
  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

}
