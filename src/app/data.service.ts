import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  // studentData:any = [];

  constructor() { }

  getData(){
    const studentData = localStorage.getItem("studentdata") || '[]';
    return JSON.parse(studentData);
  }
}
