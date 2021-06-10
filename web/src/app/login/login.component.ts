import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Auth: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  loginUser(event:any) {
    event.preventDefault()
    const target = event.target
    const username = target.querySelector('#username').value
    const password = target.querySelector('#password').value

    this.Auth.getUserDetails(username, password).subscribe(({ token }) => {

      // if(status === 'ok') {
        console.log('token',token);
      //   this.router.navigate(['admin'])
      //   this.Auth.setLoggedIn(true)
      // } else {
      //   console.log('status',status);
      //   window.alert(data)
      // }
    })
    console.log(username, password)
  }

}
