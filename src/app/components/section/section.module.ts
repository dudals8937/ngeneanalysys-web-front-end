import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModules } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { SectionComponent } from './section.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginService } from 'src/app/service/login.service';
import { AuthService } from 'src/app/service/auth.service';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];

@NgModule({
  declarations: [
    SectionComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MaterialModules
  ],
  exports: [
    SectionComponent,
    RouterModule
  ],
  providers: [
    LoginService,
    AuthService
  ]
})
export class SectionModule { }
