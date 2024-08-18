import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDetails } from '../login/loginDetails';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Pushing Data to make comparisions of userName and password
  signUpUserData: LoginDetails[] = []
  getSignUpData: LoginDetails[] = []
  userName:string = ''
  invalidCredentials:boolean = false
  invalidsignCredentials:boolean = false
  
  constructor(private router: Router) { }

  signUpData(signUpDataReceiver:LoginDetails){
    this.signUpUserData.push(signUpDataReceiver)
    localStorage.setItem('UserSignUp',JSON.stringify(this.signUpUserData))
    
  }

  loginData(loginDataReceiver:LoginDetails){
    this.getSignUpData = JSON.parse(localStorage.getItem('UserSignUp')!)
    if(this.getSignUpData){
      this.getSignUpData.forEach(signUpData => {
        if(loginDataReceiver.userName === signUpData.userName && loginDataReceiver.password === signUpData.password) {
          this.userName = signUpData.userName
          this.router.navigateByUrl('/')
        } else if(loginDataReceiver.userName != signUpData.userName || loginDataReceiver.password != signUpData.password){
          this.invalidCredentials = true          
        }
      })
    } else{
      this.invalidsignCredentials = true
    }
  }

  logout(){
    // this.userName = ''
    localStorage.clear()
    this.router.navigateByUrl('/login')

    // localStorage.setItem('UserSignUp', 'false')
  }
}
