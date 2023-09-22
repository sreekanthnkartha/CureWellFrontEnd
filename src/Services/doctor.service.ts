import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from 'src/Models/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  constructor(private _httpClient: HttpClient) { }

  apiUrl: string = "http://localhost:62506/api/";

  static displayDoctors: Observable<Doctor[]>;

  getDoctors(): Observable<Doctor[]> {
    return this._httpClient.get<Doctor[]>(this.apiUrl + "Doctors");
  }

  editDoctorDetails(id:number, value: Doctor) {
    this._httpClient.put(this.apiUrl + "Doctors/" + id, value).subscribe();
  }
}
