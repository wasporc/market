import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,private http: HttpClient) { }

  ngOnInit(): void {
  }

  registryUser(event:any){
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector('#email').value;
    const password = target.querySelector('#psw').value;
    if(target.querySelector('#message').textContent !== 'matching'){
      return;
    }
    this.http.post(environment.apiHost + '/register/', {
      login: username,
      password: password
    }, {
      observe: "body",
      responseType: "text"
    }).subscribe(() => {
      this.router.navigate([''])
    })
  }

  validatePassword(event: any) {
    const target = event.target;
    let password = target.closest('form').querySelector("#psw").value,
      confirmPassword = target.closest('form').querySelector("#psw-repeat").value,
      message = target.closest('form').querySelector('#message');
    if (password === confirmPassword) {
      message.style.color = 'green';
      message.innerHTML = 'matching';
    }else{
      message.style.color = 'red';
      message.innerHTML = 'not matching';
    }
  }

  checkLogin(event: any) {
    // console.log(event);
    const target = event.target;
    const login = target.value;
    let message = target.parentElement.querySelector('span');
    if (login === ''){
      message.innerHTML = '';
      return
    }
    this.http.get(environment.apiHost + '/register/' + login, {
      observe: "body",
      responseType: "text"
    }).subscribe((data : string)=>{
      console.dir(message);
        if (login === data){
          message.style.color = 'red';
          message.innerHTML = 'Login exist';
        }else {
          message.style.color = 'red';
          message.innerHTML = '';
        }
    });


  }
}
