import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  public email:string = "";
  public password:string = "";
  public address:string = "";
  public city:string = "";
  public state:string = "";
  public zipcode:string = "";

  constructor() { }

  ngOnInit(): void {
  }

  addStudentData(student: NgForm){
    console.log(student.value);
  }
}
