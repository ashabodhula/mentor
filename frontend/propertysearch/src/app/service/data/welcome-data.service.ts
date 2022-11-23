import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {
//http client module it deals with get,post,delete http requests 
  constructor( private http: HttpClient

  ) { }
//observable helps to define the urls
//subscribe :
  executeTest(){
     return this.http.get("http://localhost:8085/test");
   // console.log("testing hi message from backend")
  }
}
