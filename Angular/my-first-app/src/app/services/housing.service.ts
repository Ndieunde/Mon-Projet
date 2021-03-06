import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IProperty } from '../property/IProperty.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }
  getAllProperties(SellRent: number): Observable<IProperty[]> {
    return this.http.get<any>('data/properties.json').pipe(
      map(data => {
      const propertiesArray: Array<IProperty> = [];
      for (const Id in data) {
        if (data.hasOwnProperty(Id) && data[Id].SellRent === SellRent){
        propertiesArray.push(data[Id]);
        }
      }
      return propertiesArray;
    })
    );
  }
}
