import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doctor } from 'src/Models/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorServiceService {
  getDoctorsAPI:string="http://localhost:3000/api/Doctors";

  constructor(private http:HttpClient) { }

  AddNewDoctor(AddDoc:Doctor){
    this.http.post(this.getDoctorsAPI,AddDoc).subscribe(data=>{console.log(data);});
    alert("New Doctor Added")
  }
}
