import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  regForm : FormGroup | any;

  constructor() { }

  ngOnInit(): void {
    this.regForm = new FormGroup({
      'fullname' : new FormControl(null, Validators.required),
      'email' : new FormControl(null, Validators.required),
      'password' : new FormControl(null, Validators.required),
      'confpassword' : new FormControl(null, Validators.required),
      'terms' : new FormControl(null, Validators.required)
    });
  }

  doRegister(regForm : NgForm)
  {
    console.log(regForm.value);
  }

}
