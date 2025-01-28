import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkflowManagerService {
 public url:string = '/assets/workflow-manager-mock.json'
  constructor(private http: HttpClient) { }

  getUserManagementData(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
