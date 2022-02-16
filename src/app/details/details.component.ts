import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
  studentData:any = [];

  constructor(private router:Router, private data: DataService ) { }

  ngOnInit(): void {
    this.studentData = this.data.getData();
  }

  deleteData(index:number){
    this.studentData.splice(index,1);
    localStorage.setItem("studentdata",JSON.stringify(this.studentData));
    alert("Are You Sure?");
  }

  updateData(index:number){
    this.router.navigate(["/registration",index]);
  }

  hiddenPassword(i:any){
    return '*'.repeat(this.studentData[i].password.length);
  }



}
