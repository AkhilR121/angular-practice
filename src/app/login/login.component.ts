import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LoginDetails } from './loginDetails';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginData:LoginDetails = new LoginDetails('','','','')
  clsNone:boolean = true

  constructor( private auth: AuthService){}
  ngOnInit(): void {
    
  }
  public get invalid(): boolean {
    return this.auth.invalidCredentials
  }
  public get invalidSignUp():boolean {
    return this.auth.invalidsignCredentials
  }
  onLogin(loginUserData:LoginDetails){
    if (loginUserData.userName && loginUserData.password) {
      this.auth.loginData(loginUserData)
    } else{
      this.clsNone = false
    }
  }
}
