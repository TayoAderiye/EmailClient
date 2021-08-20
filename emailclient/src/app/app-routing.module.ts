import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SignoutComponent } from './auth/signout/signout.component';

const routes: Routes = [
  { path: 'signout', component: SignoutComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', component: SigninComponent },
  { path: 'inbox', canLoad: [AuthGuard], loadChildren: () => import('./inbox/inbox.module').then(mod => mod.InboxModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
