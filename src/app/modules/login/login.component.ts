import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormArray,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  constructor(private fb: FormBuilder, private router: Router,) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  login() {
    if (this.formGroup.invalid) {
      console.log('Invalid details');
      alert("Invalid details")
      return;
    }
    let username=this.formGroup.controls.username.value;
    let password=this.formGroup.controls.password.value


    this.router.navigate(['/dashboard']);
  }
}
