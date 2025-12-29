import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.loginForm.valid) {
      // handle sign in
      console.log('Sign in', this.loginForm.value);
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  onRegister() {
    // navigate to register or open register flow
    console.log('Register clicked');
  }

  onForgotPassword() {
    // open forgot password flow
    console.log('Forgot password');
  }
}
