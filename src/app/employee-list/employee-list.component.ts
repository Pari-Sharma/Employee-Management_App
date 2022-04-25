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



}




