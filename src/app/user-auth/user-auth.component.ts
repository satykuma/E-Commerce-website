import { Component } from '@angular/core';
import { Login, SignUp } from 'src/data-type';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent {

  authSignUpMessage:undefined|string
  authError:undefined | string
  show=false
  constructor(private users : UserService , private route : Router){}

  ngOnInit():void{
    this.users.userAuthReload()
  }
  signUp(data:SignUp){
    this.users.userSignup(data);
    this.authSignUpMessage="SignUp Successfully"
    setTimeout(() => {
      this.authSignUpMessage=""
      this.show=!this.show;
      // this.route.navigate(['/'])
    }, 2000);
  }
  display(){
    this.show = !this.show
  }
  login(data:Login){
    this.users.userLogin(data)
    this.authError="Email or Password not correct"
    setTimeout(() => {
      this.authError=""
      this.route.navigate(['/'])
    }, 2000);
  }
}
