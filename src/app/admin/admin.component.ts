import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  public loginForm:any = true
  public loginValid :any
  public username = '';
  public password = '';
  loginSuccessfull:boolean = false;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.username==="sravani" &&this.password==="sravani"){
      alert("Sravani Jullapally you have logged in succesfully")
      this.router.navigate (['createdream'])
      this.loginSuccessfull = true
      
    }
    else{
      alert("You have entered the wrong credentials")
    }
  }
}
