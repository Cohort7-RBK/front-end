import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AvertismentService {
  public getStudent(id:any):Observable<any>{
    return this.http.get("http://localhost:3030/api/avertisment/"+id);
  }
  public updateStudent(student:any,id:any):Observable<any>{
    return this.http.post("http://localhost:3030/api/avertisment/"+id,student);
  }
  constructor(private http: HttpClient) { }
}
