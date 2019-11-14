import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { throttleTime, scan } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  LoginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    // document.addEventListener('click', () => console.log('Clicked!'));
    // const observer = event => { console.log(event.currentTarget); };
    // fromEvent(document, 'click').subscribe(observer);

    // let count = 0;
    // let rate = 1000;
    // let lastClick = Date.now() - rate;

    // document.addEventListener('click', () => {
    //   if (Date.now() - lastClick >= rate) {
    //     console.log(`Clicked ${++count} times`);
    //     lastClick = Date.now();
    //   }
    // });
  }

  onLogin(value: {username: string, password: string}) {

    const loginCridential = {
      id: value.username,
      password: value.password
    };

    this.loginService.login(loginCridential).subscribe((data: any) => {
      // console.log('data', data);
      this.authService.setToken(data.token);
      this.router.navigate(['/dashboard']);
    });
  }

}
