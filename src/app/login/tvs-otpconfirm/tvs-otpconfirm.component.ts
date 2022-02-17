import { Component, OnInit } from '@angular/core';
import { FormBuilder, MaxLengthValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tvs-otpconfirm',
  templateUrl: './tvs-otpconfirm.component.html',
  styleUrls: ['./tvs-otpconfirm.component.scss']
})
export class TvsOTPConfirmComponent implements OnInit {

  constructor(private fb: FormBuilder, public route: Router) { }

  ngOnInit(): void {
  }
  Items = [
    {
      image: 'data:image/png;base64,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',
      title: 'OTP Confirmation',
      lable1: 'Enter OTP',
      lable2: 'Didnt Receive Code?',
      labelLink: 'Resend Code'
    }
  ]
  loginForm = this.fb.group({
    OTP: ['', Validators.required]
  })

}
