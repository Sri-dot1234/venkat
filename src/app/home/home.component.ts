import { Component, OnInit } from '@angular/core';
import { DreamcatcherService } from '../dreamcatcher.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dreamCatchers:any
  constructor(private dreamCatcherservice : DreamcatcherService) { }

  ngOnInit(): void {
// this.dreamCatcherservice.getDreamcatcher().subscribe((data)=>console.log(data))

this.getDreamCatcherObject()
// console.log(this.dreamCatchers)
console.log("Hello world")

  }
  getDreamCatcherObject(){
  this.dreamCatcherservice.getDreamcatcher().subscribe((data)=>this.dreamCatchers = data)
  }
}
