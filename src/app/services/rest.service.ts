import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private apiUrl = 'http://localhost:8080/api/v1/'; // Your API endpoint

  constructor(private http: HttpClient) { }

  getFilms(date: any): Observable<any> {
    var extraFields = "";
    if(date && date.startDate) {
      extraFields = "?startDate=" + date.startDate + "&endDate=" + date.endDate
    }
    return this.http.get<any>(this.apiUrl + 'film' + extraFields);
  }
  
}
