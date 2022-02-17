import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TvsForgotPasswordComponent } from './tvs-forgot-password/tvs-forgot-password.component';
import { TvsLoginComponent } from './tvs-login/tvs-login.component';
import { TvsOTPConfirmComponent } from './tvs-otpconfirm/tvs-otpconfirm.component';

const routes: Routes = [
  { path: '', component: TvsLoginComponent },
  { path: 'loginForm', component: TvsLoginComponent },
  { path: 'Otp', component: TvsOTPConfirmComponent },
  { path: 'forgotpwd', component: TvsForgotPasswordComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
