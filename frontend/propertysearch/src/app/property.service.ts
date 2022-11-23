import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Property } from './list/list.component';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private http:HttpClient) { }

  getAllProperties(name: string){
    return this.http.get<Property[]>(`http://localhost:8085/propertysearch/users/${name}}}/properties`)
  }
}
