import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EmployeeServiceService } from '../employee-service.service';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {
  EmployeeList!: any;
  constructor(private formbuilder:FormBuilder,
  private Employeeserv:EmployeeServiceService) { }


  ngOnInit(): void {

  }
  deleteEmployee(row:any)
  {
    this.Employeeserv.deleteEmployee(row.id)
    .subscribe(res=>{
      alert("employee deleted")

    })
  }
}
