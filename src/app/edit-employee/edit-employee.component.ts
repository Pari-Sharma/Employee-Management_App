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
Eid:number=0;
  formValue !: FormGroup;
  EmployeeList!:any;
  employeeModel :Employee=new Employee();

  constructor(private formbuilder:FormBuilder,
    private Employeeserv:EmployeeServiceService,private router:ActivatedRoute) {
      this.router.params.subscribe(params=>{
        this.Eid =(params['id']);
      });
    }


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

   this.formValue.controls['Name'].setValue(row.Name);
   this.formValue.controls['Email'].setValue(row.Email);
   this.formValue.controls['Location'].setValue(row.Location);
    this.formValue.controls['EmployemenType'].setValue(row.EmployemenType);
    this.formValue.controls['Gender'].setValue(row.Gender);
    this.formValue.controls['Languages'].setValue(row.Languages);
    this.formValue.controls['Qualification'].setValue(row.Qualification);
  }
  UpdateDetails(){
    this.employeeModel.id=this.Eid;
    this.employeeModel.Name=this.formValue.value.Name;
    this.employeeModel.EmployementType=this.formValue.value.EmployementType;
    this.employeeModel.Email=this.formValue.value.Email;
    this.employeeModel.Qualification=this.formValue.value.Qualification;
    this.employeeModel.Gender=this.formValue.value.Gender;
    this.employeeModel.Languages=this.formValue.value.Languages;
    this.employeeModel.Location=this.formValue.value.Location;
    console.log(this.employeeModel.id)
    this.Employeeserv.updateEmployee(this.employeeModel,this.employeeModel.id)
    .subscribe(res=>{
      alert("updated Successfully");
      let ref = document.getElementById('Update')
      ref?.click();
      this.formValue.reset();

    })
  }

}
