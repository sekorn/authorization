import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  template: `
    <h4>Please sign up to use all features</h4>
    <form [formGroup]="myForm" (ngSubmit)="onSignin()">
      <div class="form-group">
        <label for="email">E-mail</label>
        <input formControlName="email" type="email" id="email" class="form-control">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input formControlName="password" type="password" id="password" class="form-control">
      </div>
      <button type="submit" [disabled]="!myForm.valid" class="btn btn-primary">Sign-In</button>
    </form>
  `
})
export class SigninComponent implements OnInit {
  myForm: FormGroup;
  error = false;
  errorMessage='';

  constructor(private fb: FormBuilder) { }

  onSignin() {

  }

  ngOnInit():any {
    this.myForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
}
