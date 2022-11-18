import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
isUserLoggedIN:boolean=false
  constructor(public hardcodedAutheticationservice:HardcodedAuthenticationService) { }

  ngOnInit(): void {
    this.isUserLoggedIN=this.hardcodedAutheticationservice.isUserLoggedIn();

  }

}
