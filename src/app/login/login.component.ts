import { DataService } from './../data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private mydb:DataService) { }

  emailRegEx = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/  
  patternNormal: any = "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{6,}$";
loginForm = new FormGroup ({

name: new FormControl(''),
password: new FormControl('', Validators.minLength(6))
})

getLoginemail(){
  return this.loginForm.get('name')
}
getPassword() {
  return this.loginForm.get('password');
}
saveUser() {
  console.log('Step 1', this.loginForm.value);
  this.mydb.postData(this.loginForm.value)
  .subscribe(result => {

  }, error => {
    console.log('Password ghalat hy', error.status);
  });
}
  ngOnInit() {
  }

}