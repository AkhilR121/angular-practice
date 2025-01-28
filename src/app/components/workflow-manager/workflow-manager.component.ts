import { Component, OnInit } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { WorkflowManagerService } from './workflow-manager.service';
import { WorkflowManagerTableComponent } from "./workflow-manager-table/workflow-manager-table.component";

@Component({
  selector: 'app-workflow-manager',
  standalone: true,
  imports: [MatCheckboxModule, WorkflowManagerTableComponent],
  templateUrl: './workflow-manager.component.html',
  styleUrl: './workflow-manager.component.scss'
})
export class WorkflowManagerComponent implements OnInit {
  tableData = [];
  
  constructor(private tableMockData: WorkflowManagerService){}

  ngOnInit(): void {
      this.getUserManagerHeader()
  }

  getUserManagerHeader(){
    this.tableMockData.getUserManagementData()
      .pipe(data => data)
      .subscribe(result => console.log("tableData: ",result)
    )
  }

}
