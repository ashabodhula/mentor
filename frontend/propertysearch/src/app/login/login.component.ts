import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username='asha'
  password=''
  errorMessage='Invalid Credentials'
  inValidLogin=false
  //Router concept acts as dependent injection

  constructor( private router:Router , private hardcodedAuthenticationservice:HardcodedAuthenticationService) { }

  ngOnInit(): void {
  }
  handleLogin(){
//if(this.username==="asha"&&this.password==='dummy')
if(this.hardcodedAuthenticationservice.authenticate(this.username,this.password)){
this.router.navigate(['welcome',this.username])
  this.inValidLogin=false

}
else {
  this.inValidLogin=true
}
    console.log(this.username)
  }

}
