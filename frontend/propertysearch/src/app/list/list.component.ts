import { Component, OnInit } from '@angular/core';

export enum Status{
  PAID,
  NOTPAID,
  PARTLYPAID
};
export class Property{
  constructor(
    public id:number,
    public address:string,
    public type:string,
    public legalDescription:string,
    public taxAmount:number,
    public taxStatus:string,
    public lastregistrationDate:Date



  ){

  }
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
//object of list
listOfProperties=[
  new Property(1,'hbiufwro','house','buhwic',2999,Status[Status.NOTPAID],new Date()),
  {
    
    id:9,
    address:'sri nagar colony, anantapur',
    type:'house',
    legalDescription:'Lot 42, Block 3, of North Plat Book 62, Page 9, of the Public Records of Indian Country',
    taxAmount:200.00,
    taxStatus:Status[Status.PAID],
    lastregistrationDate:"01-01-2020"
  },
  {
    id:2,
    address:'nagar colony, anantapur',
    type:'flat',
    legalDescription:'Lot 34, Block 00, of south Plat Book 12, Page o, of the Public Records of Indian Country',
    taxAmount:100.00,
    taxStatus:Status[Status.PARTLYPAID],
    lastregistrationDate:"01-01-1997"
  }

]
  // list={
  //   id:1,
  //   address:'sri nagar colony, anantapur',
  //   type:'house',
  //   legalDescription:'Lot 42, Block 3, of North Plat Book 62, Page 9, of the Public Records of Indian Country',
  //   taxAmount:200.00,
  //   taxStatus:'paid'
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
