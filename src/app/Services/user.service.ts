import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Login, SignUp } from 'src/data-type';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private route: Router) {}

  userSignup(data: SignUp) {
    this.http
      .post('http://localhost:3000/users', data, {
        observe: 'response',
      })
      .subscribe((result) => {
        if (result) {
          // localStorage.setItem('user', JSON.stringify(result.body));
          // this.route.navigate(['/'])
        }
      });
  }
  userAuthReload() {
    if (localStorage.getItem('user')) {
      this.route.navigate(['/']);
    }
  }
  userLogin(data: Login) {
    this.http.get<SignUp[]>(
      `http://localhost:3000/users?email=${data.email}&password=${data.password}`
    , {observe:'response'}).subscribe((result)=>{
      if(result && result.body){
        localStorage.setItem('user' , JSON.stringify(result.body[0]))
        this.route.navigate(['/'])
      }
    })
  }
}
