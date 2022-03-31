import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  public loginValid = true;
  public username = '';
  public password = '';

  onSubmit(){
    if(this.username==="venkatesh" &&this.password==="venkatesh"){
       this.router.navigate (['home'])
    }
  }

}
