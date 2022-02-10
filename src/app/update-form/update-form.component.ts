import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {

  email:string = "";
  password:string = "";
  address:string = "";
  city:string = "";
  state:number = 0;
  zipcode:string = "";
  updateId:number = 0;
  studentData:any = [];

  constructor(private route:ActivatedRoute,private router: Router, private data: DataService) { }

  ngOnInit(): void {

    this.studentData = this.data.getData();

    this.route.paramMap.subscribe((params: ParamMap)=>{
      let id = Number(params.get("index"));
      this.updateId = id;
    })

    
    this.email = this.studentData[this.updateId].email,
    this.password = this.studentData[this.updateId].password,
    this.address = this.studentData[this.updateId].address,
    this.city = this.studentData[this.updateId].city,
    this.state = this.studentData[this.updateId].state,
    this.zipcode = this.studentData[this.updateId].zipcode

 
  }

  updateForm(formValue: NgForm){
    if(formValue.valid!=false){
      this.studentData.splice(this.updateId,1,formValue.value)
      localStorage.setItem("studentdata",JSON.stringify(this.studentData));
      this.resetForm(formValue);
      this.router.navigate(["/details"]);
    }
    else{
      alert("Fill the Value");
    }
  }

  resetForm(formValue: NgForm){
    formValue.reset();
  }
}
