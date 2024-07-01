import { Routes } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { ApiServiceComponent } from './components/api-service/api-service.component';
import { RootComponent } from './components/root/root.component';

export const routes: Routes = [
  { path: '', redirectTo: 'root', pathMatch: 'full' },
  { path: 'root', component: RootComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'services', component: ApiServiceComponent },
];
