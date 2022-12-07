import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { LoginService } from '../Services/login.service';
// import { isUserLoggedIn} from '../interfaces/RMHResults';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoggedIn : Observable<boolean>;
  isLoggedOut : Observable<boolean>;
  userName : Observable<boolean>;
formModel={
    UserName:'',
    Password:''
  }
  iLogin:Ilogin= new Ilogin();
  constructor( private router : Router , private service:LoginService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.service.isUserLoggedIn;
    this.isLoggedOut = this.service.isUserLoggedOut;
    this.userName = this.service.isUserLoggedIn;
  }
  
  onSubmit(form: NgForm)
  {
    localStorage.setItem('userName', form.value.UserName);
    this.service.login(form.value).subscribe(
      (res:any)=>{
        localStorage.setItem('token', res.token);
        // this.service.getUserRole(form.value).subscribe(
        //   (data:isUserLoggedIn)=>{
        //   console.log(data.userRole);
        //   localStorage.setItem('userRole', data.userRole);
        //   this.router.navigate(['/home']);
        // }, err => console.log('HTTP Error', err));
      },
      err=>{
        if(err.status==400){
         // this.toastr.error('Incorrect username or password','Authentication Failed');
        }
        else
        {
          console.log(err);
        }
      });
  }

  // onSubmit(form: NgForm)
  // {
  //   if(this.iLogin.UserName === "admin"  && this.iLogin.Password === "admin"){
  //     //this.router.navigateByUrl('ngfor');
  //     this.router.navigate(['/home']); 
  //   }
  // }
}

export class Ilogin{
  UserName:string;
  Password:string;
}
