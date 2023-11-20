import { Component } from '@angular/core';
import { SellerService } from '../Services/seller.service';
import { Router } from '@angular/router';
import { SignUp } from 'src/data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {

  show = false;
  authError:string = "";
  authSignUpMessage:string=""

  constructor(private seller:SellerService, private router:Router){}
  ngOnInit():void{
    this.seller.reloadSeller()
  }
  signUp(data:SignUp):void{
    this.seller.sellerSignUp(data)
    this.authSignUpMessage="Successfully Signed Up!"
    setTimeout(() => {
      this.show=!this.show
    }, 2000);
  }
  
  login(data:SignUp):void{
    // console.log(data)
    this.authError=""
    this.seller.userLogin(data)
    this.seller.isLoginError.subscribe((isError)=>{
      if(isError){
        this.authError="Email or password is not correct"
      }
    })
  }
  
  display(){
    this.show=!this.show;
  }
}
