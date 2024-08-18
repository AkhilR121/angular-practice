import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDetails } from '../login/loginDetails';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public loginData:LoginDetails = new LoginDetails('','','','')
  public clsNone: boolean = true

  constructor(private auth: AuthService, private router: Router) { }
  ngOnInit(): void {
    
  }
  onSignUp(signUpData:LoginDetails){
    if(signUpData.email && signUpData.password && signUpData.phone && signUpData.userName){
      this.auth.signUpData(signUpData) 
      this.router.navigateByUrl('/login')
    } else {
      this.clsNone = false
    }
  }


}
