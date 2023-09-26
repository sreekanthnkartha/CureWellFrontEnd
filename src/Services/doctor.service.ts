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

  apiUrl: string = "http://localhost:3000/api/"; // API base URL

  // Function to fetch list of doctors from the API
  getDoctors(): Observable<Doctor[]> {
    return this._httpClient.get<Doctor[]>(this.apiUrl + "Doctors");
  }

  // Function to fetch list of doctor specializations from the API
  getDoctorSpec(): Observable<Doctorspecialization[]> {
    return this._httpClient.get<Doctorspecialization[]>(this.apiUrl + "Specialization");
  }

  // Function to add a new doctor to the API
  AddNewDoctor(AddDoc: Doctor): void {
    this._httpClient.post(this.apiUrl + 'doctors', AddDoc).subscribe(data => { console.log(data); });
    alert("New Doctor Added"); // Display an alert after adding the doctor
  }

  // Function to edit doctor details in the API
  editDoctorDetails(id: number, value: Doctor): void {
    this._httpClient.put(this.apiUrl + "Doctors/" + id, value).subscribe();
  }

  // Function to delete a doctor from the API
  DeleteDoctor(id: number): void {
    this._httpClient.delete(this.apiUrl + "Doctors/" + id).subscribe();
  }

  // Function to fetch doctors by specialization code from the API
  getdoctorbyspecialization(code: string): Observable<Doctor[]> {
    return this._httpClient.get<Doctor[]>(this.apiUrl + "Doctors/" + code);
  }
}
