import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //this is a default
})
export class ServerElementComponent implements OnInit {
  @Input('srvCompElement') element:{type:string, name:string, content:string };//We need to add a Decoratorms INPUT
  constructor() { }
  
  
  ngOnInit() {
  }

}
