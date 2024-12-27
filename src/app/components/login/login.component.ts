import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,  RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm:FormGroup = new FormGroup({
    username:new FormControl("",[Validators.required]),
    password:new FormControl("",[Validators.required])
  });

  constructor(private router:Router)
  {

  }

  ngOnInit()
  {

  }

  login()
  {
    console.log(this.loginForm.value);
    console.log("login success");
    this.router.navigate(['']);
  }
}
