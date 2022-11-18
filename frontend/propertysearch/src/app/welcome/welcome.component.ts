import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

//member variable

export class WelcomeComponent implements OnInit {
  message='welcome messgae'
  name=''
//actived
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.message)
    //this.route.snapshot.params['name']
    this.name=this.route.snapshot.params['name']
  }

}
