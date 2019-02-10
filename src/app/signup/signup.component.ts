import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, MinLengthValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }
  emailRegEx = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
  patternNormal: any = "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{6,}$";

form = new FormGroup({

fullname: new FormControl('', Validators.minLength(4)),
email: new FormControl('', Validators.pattern(this.emailRegEx)),
password: new FormControl('', Validators.pattern(this.patternNormal))
})

getEmail() {
  return this.form.get('email')
}

getPassword(){
  return this.form.get('password')
}
  ngOnInit() {
  }

}
