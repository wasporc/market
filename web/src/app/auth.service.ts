import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {environment} from "../environments/environment";

interface myData {
  // status: "ok" | "error",
  // data: string
  token: string
  userName: string;
  userLogin: string;
  role: Array<string>;
}

@Injectable()
export class AuthService {

  private loggedInStatus = false;
  private userInfo : myData | undefined;

  constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value
  }

  get isLoggedIn() {
    return this.loggedInStatus
  }

  setUserInfo(data: myData){
      this.userInfo = data;
  }

  get userInfoLogin(){
     return this.userInfo;
  }

  getUserDetails(username:any, password:any) {
    return this.http.post<myData>(environment.apiHost + '/auth', {
      username,
      password
    })
  }

}
