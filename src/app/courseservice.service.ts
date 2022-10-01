import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseserviceService {

  constructor(private http:HttpClient) { }
  addcourse(data:any){
    console.log(data);
    return this.http.post<any>(`api`,data);

    


   
  }
  
  
}

