import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { SurgeryModel } from 'src/Models/surgery';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SurgeryService {
  surgeryAPI:string="http://localhost:3000/api/Surgery";


  constructor(private http:HttpClient) { }

  getAllSurgeriesForToday():Observable<SurgeryModel[]>{
    return this.http.get<SurgeryModel[]>(this.surgeryAPI)
    .pipe(
      tap(
        data => console.log('Response received:', data),
        error => console.error('Error fetching surgeries:', error),
        () => console.log('Request completed')
      )
    );
  }

  getSurgeryById(surgeryId: number): Observable<SurgeryModel> {
    const url = `${this.surgeryAPI}/${surgeryId}`;
    return this.http.get<SurgeryModel>(url);
  }

  updateSurgery(s: SurgeryModel) {
    this.http.put(this.surgeryAPI + '/' + s.SurgeryId, s).subscribe(
      (data: any) => {
        if (data === true) {

          console.log('Surgery updated successfully');
          
          alert('Surgery details updated successfully!');
        } else {
          console.error('Failed to update surgery');
          alert('Failed to update surgery');
        }
      },
      (error) => {
        console.error('Error updating surgery:', error);
        alert('Error updating surgery. Please try again later.');
      }
    );
  }
}
