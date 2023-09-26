import { Injectable } from '@angular/core';
import { SpecializationModel } from 'src/Models/SpecializationModel'; 
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpecializationService {

  apiURL:string="http://localhost:3000/api/Specialization"; // API endpoint for Specialization

  // Constructor with HttpClient dependency injection
  constructor(private http:HttpClient) { }

  // Function to fetch list of specializations from the API
  getSpecializations(): Observable<SpecializationModel[]> {
    return this.http.get<SpecializationModel[]>(this.apiURL);
  }
}

