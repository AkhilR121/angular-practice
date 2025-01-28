import { Component, OnInit } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { WorkflowManagerService } from './workflow-manager.service';
import { WorkflowManagerTableComponent } from "./workflow-manager-table/workflow-manager-table.component";
import { TableHeaders } from '../../models/workflowManager-model';

@Component({
  selector: 'app-workflow-manager',
  standalone: true,
  imports: [MatCheckboxModule, WorkflowManagerTableComponent],
  templateUrl: './workflow-manager.component.html',
  styleUrl: './workflow-manager.component.scss'
})
export class WorkflowManagerComponent implements OnInit {
  tableData: any[] = [];
  tableHeadersData: TableHeaders[] = [
    {
      id: 1,
      name: 'task id'
    },
    {
      id: 2,
      name: 'opportunity id'
    },
    {
      id: 3,
      name: 'task name'
    },
    {
      id: 4,
      name: 'task status'
    },
    {
      id: 5,
      name: 'comments'
    },
    {
      id: 6,
      name: 'create date'
    },
    {
      id: 7,
      name: 'update time stamp'
    },
    {
      id: 8,
      name: 'execution time'
    },
  ]

  constructor(private tableMockData: WorkflowManagerService) { }

  ngOnInit(): void {
    this.getUserManagerHeader()
  }

  getUserManagerHeader() {
    this.tableMockData.getUserManagementData()
      .pipe(data => data)
      .subscribe({
        next: (data) => this.tableData = data,
        error: (error) => console.log(error)
      }
      )
  }

}
