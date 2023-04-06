import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from './Employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url = "/assets/Employee.json"
  constructor(private http:HttpClient) { }

  getEmployee():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this.url);
  }
}
