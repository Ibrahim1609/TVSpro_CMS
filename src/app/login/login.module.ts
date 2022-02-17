import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { TvsLoginComponent } from './tvs-login/tvs-login.component';
import { TvsForgotPasswordComponent } from './tvs-forgot-password/tvs-forgot-password.component';
import { TvsOTPConfirmComponent } from './tvs-otpconfirm/tvs-otpconfirm.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TvsLoginComponent,
    TvsForgotPasswordComponent,
    TvsOTPConfirmComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule, ReactiveFormsModule,
  ],
  exports: [
    TvsLoginComponent,
    TvsForgotPasswordComponent,
    TvsOTPConfirmComponent
  ]
})
export class LoginModule { }
