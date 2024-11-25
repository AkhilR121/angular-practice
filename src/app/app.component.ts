import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import { CounterComponent } from './components/counter/counter.component';
import { ChangeDetectionComponent } from './components/change-detection/change-detection.component';


@Component({
	selector: 'app-root',
	standalone: true,
	imports: [AgGridAngular, RouterModule, CounterComponent, ChangeDetectionComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent { }
