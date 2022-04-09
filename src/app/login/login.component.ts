import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  public loginForm:any = true
  public loginValid :any
  public username = '';
  public password = '';
  loginSuccessfull:boolean = false;
  constructor(private router:Router){

  }
  ngOnInit(): void {
    
  }
  onSubmit(){
    if(this.username==="venkatesh" &&this.password==="venkatesh"){
      alert("Sravani Jullapally you have logged in succesfully")
      this.router.navigate (['navbar'])
      this.loginSuccessfull = true
      
    }
    else{
      alert("You have entered the wrong credentials")
    }
  }

}
