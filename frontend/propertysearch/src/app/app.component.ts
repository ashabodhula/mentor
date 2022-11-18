import { Component } from '@angular/core';

@Component({  //decorator which is like anotation in java
  selector: 'app-root',  //selector is tag name for this component
  templateUrl: './app.component.html', //we can replace templateUrl with template and 
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'propertysearch'; //member variable
  message='welcome page'
}
