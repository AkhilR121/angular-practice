import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community'; // Column Definition Type Interface

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public rowData = [
    {
      STATUS: 'Tesla',
      'PRODUCT NAME': 'Model Y',
      price: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-funnel-fill" viewBox="0 0 16 16"><path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5z"/></svg>`,
      electric: true,
    },
    {
      STATUS: 'Ford',
      'PRODUCT NAME': 'F-Series',
      price: 33850,
      electric: false,
    },
    {
      STATUS: 'Toyota',
      'PRODUCT NAME': 'Corolla',
      price: 29600,
      electric: false,
    },
    {
      STATUS: 'Maruti',
      'PRODUCT NAME': 'Corolla',
      price: 29600,
      electric: false,
    },
    {
      STATUS: 'Ferrari',
      'PRODUCT NAME': 'Corolla',
      price: 29600,
      electric: false,
    },
  ];

  public colDefs: ColDef[] = [
    { field: 'STATUS' },
    { field: 'PRODUCT NAME' },
    { field: 'PRODUCT START DATE' },
    { field: 'PRODUCT END DATE' },
    { field: 'PRODUCT TERM' },
    { field: 'PRODUCT ID' },
    { field: 'PRODUCT TYPE' },
    { field: 'PRICE DATE' },
    { field: 'STRUCTURE DATE' },
    { field: 'STRUCTURE STATUS' },
  ];

  defaultColDef = {
    headerComponent: 'customHeaderComponent',
    filter: true,
  };

  filterIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-funnel-fill" viewBox="0 0 16 16">
  				<path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5z"/>
			</svg>`;
  }
}
