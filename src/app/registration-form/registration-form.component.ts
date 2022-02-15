import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
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
  state:number | undefined;
  zipcode:string = "";
  updateId:any = null;
  studentData:any = [];
  isValid:boolean = false;

  constructor(private route:ActivatedRoute, private data: DataService, private router: Router) { }

  ngOnInit(): void {
    this.studentData = this.data.getData();

    this.route.paramMap.subscribe((params: ParamMap)=>{
      let id = params.get("index");
      this.updateId = id || null;
    });

    if(this.updateId){
      this.email = this.studentData[this.updateId].email,
      this.password = this.studentData[this.updateId].password,
      this.address = this.studentData[this.updateId].address,
      this.city = this.studentData[this.updateId].city,
      this.state = this.studentData[this.updateId].state,
      this.zipcode = this.studentData[this.updateId].zipcode
    }
  }

  addStudentData(formValue: NgForm){
    this.isValid = false;
    if(formValue.valid!=false){
      if(this.updateId){
        this.studentData.splice(this.updateId,1,formValue.value);
        localStorage.setItem("studentdata",JSON.stringify(this.studentData));
        this.router.navigate(["/details"]);
      }
      else{
        this.studentData.push(formValue.value)
        localStorage.setItem("studentdata",JSON.stringify(this.studentData));
      }
      this.resetForm(formValue);
    }
    else{
      this.isValid=true;
    }
  }

  resetForm(formValue: NgForm){
    this.isValid = false;
    formValue.reset();
  }
}
