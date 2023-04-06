import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  public empList:any = [];
  constructor(private _employeeList:EmployeeService){}
  ngOnInit(){
    this._employeeList.getEmployee()
      .subscribe(data => this.empList = data)
  }
}
