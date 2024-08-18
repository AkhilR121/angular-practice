import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, Observable } from 'rxjs';
import { FoodDataType } from '../food-data-type';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  public url:string = '/assets/foodData/foodData.json'
  constructor(private http: HttpClient) { }

  getAll(): Observable<FoodDataType[]> {
    return this.http.get<FoodDataType[]>(this.url)
  }

}
