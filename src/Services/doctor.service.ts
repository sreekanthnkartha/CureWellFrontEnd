import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from 'src/Models/doctor';
import { Doctorspecialization } from 'src/Models/doctorspecialization';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  constructor(private _httpClient: HttpClient) { }

  apiUrl: string = "http://localhost:3000/api/";

  getDoctors(): Observable<Doctor[]> {
    return this._httpClient.get<Doctor[]>(this.apiUrl + "Doctors");
  }

  getDoctorSpec(): Observable<Doctorspecialization[]> {
    return this._httpClient.get<Doctorspecialization[]>("http://localhost:3000/api/Specialization");
  }

  AddNewDoctor(AddDoc:Doctor){
    this._httpClient.post(this.apiUrl + 'doctors',AddDoc).subscribe(data=>{console.log(data);});
    alert("New Doctor Added")
  }

  editDoctorDetails(id:number, value: Doctor) {
    this._httpClient.put(this.apiUrl + "Doctors/" + id, value).subscribe();
  }

  DeleteDoctor(id:number){
    this._httpClient.delete(this.apiUrl+ "Doctors/"+id).subscribe();
  }

  getdoctorbyspecialization(code:string):Observable<Doctor[]> {
    return this._httpClient.get<Doctor[]>(this.apiUrl + "Doctors/"+code);
  }
}
