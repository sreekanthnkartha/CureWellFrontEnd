import { Injectable } from '@angular/core';
import { SpecializationModel } from 'src/Models/SpecializationModel';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpecializationService {

  apiURL:string="http://localhost:3000/api/Specialization"

  constructor(private http:HttpClient) { }

  getSpetialization():Observable<SpecializationModel[]>{
    return this.http.get<SpecializationModel[]>(this.apiURL)
  }
}
