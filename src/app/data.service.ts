import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  studentData:any = [];

  constructor() { }

  getData(){
    if(localStorage.getItem("studentdata") == null){
      localStorage.setItem("studentdata",JSON.stringify([]));
    }
    else{
      let data:any = localStorage.getItem("studentdata");
      this.studentData = JSON.parse(data);
    }
    return this.studentData;
  }
}
