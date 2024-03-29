import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ModalModule } from 'ng2-bootstrap';

import { AuthService } from '../shared/auth.service';

@Component({
  template: `


  <!--Large modal-->
  <!--
  <button class="btn btn-primary" (click)="lgModal.show()">Large modal</button>

  <div bsModal #lgModal="bs-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4>Please sign up to use all features</h4>
        </div>

        <div class="modal-body"> -->
          <form [formGroup]="myForm" (ngSubmit)="onSignup()">
            <div class="form-group">
              <label for="email">E-mail</label>
              <input formControlName="email" type="email" id="email" #email class="form-control">
              <span *ngIf="!email.pristine && email.errors != null && email.errors['noEmail']">Invalid email address</span>
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input formControlName="password" type="password" id="password" class="form-control">
            </div>
            <div class="form-group">
              <label for="confirm-password">Confirm Password</label>
              <input formControlName="confirmPassword" type="password" id="confirm-password" #confirmPassword class="form-control">
              <span *ngIf="!confirmPassword.pristine && confirmPassword.errors != null && confirmPassword.errors['passwordsNotMatch']">Passwords do not match</span>
            </div>
            <button type="submit" [disabled]="!myForm.valid" class="btn btn-primary">Sign Up</button>
          </form>
        <!--</div>


      </div>
    </div>
  </div>-->
  `
})
export class SignupComponent implements OnInit {
  myForm: FormGroup;
  error = false;
  errorMessage = '';

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  onSignup() {
    this.authService.signupUser(this.myForm.value);
  }

  ngOnInit():any {
    this.myForm = this.fb.group({
      email: ['', Validators.compose([
        Validators.required,
        this.isEmail
      ])],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.compose([
        Validators.required,
        this.isEqualPassword.bind(this)
      ])]
    });
  }

  isEmail(control: FormControl): { [s: string]: boolean} {
    if (!control.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      return {noEmail: true};
    }
  }

  isEqualPassword(control: FormControl): { [s: string]: boolean} {
    if (!this.myForm) {
      return { passwordsNotMatch: true};
    }
    if (control.value != this.myForm.controls['password'].value) {
      return { passwordsNotMatch: true};
    }
  }
}
