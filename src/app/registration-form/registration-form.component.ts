import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  email:string = "";
  password:string = "";
  address:string = "";
  city:string = "";
  state:number = 0;
  zipcode:string = "";
  updateId:number = 0;
  studentData:any = [];

  constructor(private route:ActivatedRoute, private data: DataService) { }

  ngOnInit(): void {
    this.studentData = this.data.getData();
  }

  addStudentData(formValue: NgForm){
    if(formValue.valid!=false){
      this.studentData.push(formValue.value)
      localStorage.setItem("studentdata",JSON.stringify(this.studentData));
      this.resetForm(formValue);
    }
    else{
      alert("Fill the Value");
    }
  }

  resetForm(formValue: NgForm){
    formValue.reset();
  }


}
