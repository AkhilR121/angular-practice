import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public cartItemsLength:string = ''
  public loginNone:any
  public userLoginName:any

  constructor( private cs: CartService, private auth: AuthService, private router: Router ) {
  }
  ngOnInit(): void {
    
  }

  public get displayName():any {
    return this.cs.cartLength
  }
  public get userName():string {
    return this.auth.userName
  }

  displayNone(){
    if(this.userName){
      return true
    } else {
      return false
    }
  }

  logout(){
    if(!this.userName){
      return true
    } else {
      return false
    }
  }

  onLogout(){
    this.auth.logout()
    this.displayNone()
    this.logout()
  }

}
