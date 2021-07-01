import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string | undefined;

  constructor(private Auth: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  loginUser(event:any) {
    event.preventDefault()
    const target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;
    this.username = username;
    this.Auth.getUserDetails(username, password)
      //{ token, userName, userLogin, role }
      .subscribe((data) => {
        console.log('token',data);
        // this.router.navigate(['login']);
        this.Auth.setLoggedIn(true);
        this.Auth.setUserInfo(data);
    })
  }

}
