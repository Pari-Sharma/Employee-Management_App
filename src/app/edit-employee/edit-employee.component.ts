import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Employee } from '../Employee';
import { EmployeeServiceService } from '../employee-service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  formValue !: FormGroup;
  EmployeeList!:any;
  employeeModel :Employee=new Employee();
  constructor(private formbuilder:FormBuilder,
    private Employeeserv:EmployeeServiceService,private router:ActivatedRoute) { }


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
  onedit(row:any)
  {
    this.EmployeeList.id=row.id;
   this.formValue.controls['Name'].setValue(row.Name);
   this.formValue.controls['Email'].setValue(row.Email);
   this.formValue.controls['Location'].setValue(row.Location);
    this.formValue.controls['EmployemenType'].setValue(row.EmployemenType);
    this.formValue.controls['Gender'].setValue(row.Gender);
    this.formValue.controls['Languages'].setValue(row.Languages);
    this.formValue.controls['Qualification'].setValue(row.Qualification);
  }
  UpdateDetails(){
    this.EmployeeList.Name=this.formValue.value.Name;
    this.EmployeeList.EmployementType=this.formValue.value.EmployementType;
    this.EmployeeList.Email=this.formValue.value.Email;
    this.EmployeeList.Qualification=this.formValue.value.Qualification;
    this.EmployeeList.Gender=this.formValue.value.Gender;
    this.EmployeeList.Languages=this.formValue.value.Languages;
    this.EmployeeList.Location=this.formValue.value.Location;
    this.Employeeserv.updateEmployee(this.EmployeeList,this.EmployeeList.id)
    .subscribe(res=>{
      alert("updated Successfully");
      let ref = document.getElementById('Update')
      ref?.click();
      this.formValue.reset();

    })
  }

}
