import { Component, Input } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TableHeaders } from '../../../models/workflowManager-model';

@Component({
  selector: 'app-workflow-manager-table',
  standalone: true,
  imports: [MatCheckboxModule],
  templateUrl: './workflow-manager-table.component.html',
  styleUrl: './workflow-manager-table.component.scss'
})
export class WorkflowManagerTableComponent {
  @Input() public tableHeaders: TableHeaders[] | undefined;

}
