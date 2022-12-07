import { Injectable } from '@angular/core';
import { FormBuilder, RequiredValidator, Validators, FormGroup } from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private loggedOut: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  private LoggedInUsername: BehaviorSubject<string> = new BehaviorSubject<string>("");
  private headers: HttpHeaders;
  readonly BaseURIH="https://localhost:44383/";
  formModel= this.fb.group({
    UserName:['', Validators.required],
    Email:['',Validators.email],
    FullName:[''],
    Passwords:this.fb.group({
      Password:['',[Validators.required, Validators.minLength(6)]],
      ConfirmPassword:['', Validators.required]
    },{validators:this.comparePasswords})
  });
  constructor(private fb: FormBuilder,private http: HttpClient) {
    this.loggedOut.next(true);
   }
   comparePasswords(fb: FormGroup) {
    let confirmPswrdCtrl = fb.get('ConfirmPassword');
    //passwordMismatch
    //confirmPswrdCtrl.errors={passwordMismatch:true}
    if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
      if (fb.get('Password').value != confirmPswrdCtrl.value)
        confirmPswrdCtrl.setErrors({ passwordMismatch: true });
      else
        confirmPswrdCtrl.setErrors(null);
    }
  }
  login(formData)
  {
    return this.http.post('/Authenticate/Login', formData).pipe(map(user => {
      if(user){
        this.loggedIn.next(true);
        this.loggedOut.next(false);
        this.LoggedInUsername.next(localStorage.getItem('userName'));
      }else{
        return false;
      }
      return user;
    }))
   // this.loggedIn.next(true);
    // result;
    //return this.http.post(this.BaseURI+'/WeatherForecast/Login', formData);
  }
  getUserRole(formData)
  {
    return this.http.post('/Authenticate/GetUserRole', formData);
  }

  getUserProfile(){
    return this.http.get(this.BaseURIH+'/Students');
  }
  get isUserLoggedIn(){
    if(localStorage.getItem('token')!=null)
      {
        this.loggedIn.next(true);
        //this.username= localStorage.getItem('userName');
      }
    return this.loggedIn.asObservable();
}
get isUserLoggedOut(){
  if(localStorage.getItem('token')!=null)
      {
        this.loggedOut.next(false);
        //this.username= localStorage.getItem('userName');
      }
  return this.loggedOut.asObservable();
}
get isLoggedInUser(){
  if(localStorage.getItem('token')!=null)
      {
        this.loggedIn.next(true);
        this.LoggedInUsername.next(localStorage.getItem('userName'));
      }
  return this.LoggedInUsername.asObservable();
}

userLogOut()
 {
  this.loggedIn.next(false);
  this.loggedOut.next(true);
  this.LoggedInUsername.next("");
 }
}
