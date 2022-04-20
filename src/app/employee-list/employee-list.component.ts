import { SimplePlaceholderMapper } from '@angular/compiler/src/i18n/serializers/serializer';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgModel } from '@angular/forms';
import { InjectionToken } from '@angular/core';
import { EditEmployeeComponent } from '../edit-employee/edit-employee.component';
import { EmployeeServiceService } from '../employee-service.service';
import { Employee } from '../Employee';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  formValue !: FormGroup;
  EmployeeList!: any;
  constructor(private formbuilder:FormBuilder,
  private Employeeserv:EmployeeServiceService) { }
  ngOnInit(): void {
    this.getEmployee();

  }

  getEmployee()
  {
    this.Employeeserv.getEmployee()
    .subscribe(res=>{
    this.EmployeeList=res;
  })
}

  deleteEmployee(row:any)
  {
    this.Employeeserv.deleteEmployee(row.id)
    .subscribe((res)=>{
      alert("Employee Deleted succesfully")
      this.getEmployee();
    })
  }
  onedit(row:any){
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




