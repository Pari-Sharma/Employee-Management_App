import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Employee } from '../Employee';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  formValue !: FormGroup;
  EmployeeList!:any;
  employeeModel :Employee=new Employee();
  constructor(private formbuilder:FormBuilder,
    private employee:EmployeeServiceService) { }


  ngOnInit(): void {
    this.formValue=this.formbuilder.group({
      Name:[''],
      EmployementType:[''],
      Email:[''],
      Qualification:[''],
      Location:[''],
      Languages:[''],
      Gender:[''],
  })
}
  postEmployeeDetails()
{
  this.employeeModel.Name=this.formValue.value.Name;
  this.employeeModel.EmployementType=this.formValue.value.EmployementType;
  this.employeeModel.Email=this.formValue.value.Email;
  this.employeeModel.Qualification=this.formValue.value.Qualification;
  this.employeeModel.Gender=this.formValue.value.Gender;
  this.employeeModel.Languages=this.formValue.value.Languages;
  this.employeeModel.Location=this.formValue.value.Location;

  this.employee.postEmployee(this.employeeModel)
  .subscribe(res=>{
    console.log(res);
    alert("Employee Added Succesfully")
    let ref =document.getElementById('submit')
    ref?.click();
    this.formValue.reset();

  },
     err=>{
    alert("something went wrong");
  })

}
}
