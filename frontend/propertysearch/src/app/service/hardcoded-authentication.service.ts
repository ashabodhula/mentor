import { Injectable } from '@angular/core';

//@Injectable indicates it as service and enables dependency injection at root level
@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {
  username: any;

  constructor() { }

  authenticate(username:any, password: any) {
    console.log('before '+ this.isUserLoggedIn());
    if(username==="asha" && password === 'dummy') {
     sessionStorage.setItem('authunticateuser',username)
     console.log(' after ' +this.isUserLoggedIn());
      return true;
    }
    return false;
  }
  isUserLoggedIn(){
    let user = sessionStorage.getItem('authunticateuser')
    return !(user ===null)
  }

  logout(){
    sessionStorage.removeItem('authunticateuser')
  }
}
