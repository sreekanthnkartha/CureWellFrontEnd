import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { SurgeryModel } from 'src/Models/surgery';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SurgeryService {
  
  getSurgeryAPI:string="http://localhost:16351/api/Surgery";

  constructor(private http:HttpClient) { }

  getAllSurgeriesForToday():Observable<SurgeryModel[]>{
    return this.http.get<SurgeryModel[]>(this.getSurgeryAPI)
    .pipe(
      tap(
        data => console.log('Response received:', data),
        error => console.error('Error fetching surgeries:', error),
        () => console.log('Request completed')
      )
    );
  }
}
