import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../environments/environment";
import { AuthService } from '../auth.service';


export interface ProductCart {
  id: number,
  name: string,
  price: number
  quantity: number
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: Array<ProductCart> | [] | undefined

  constructor(private http: HttpClient,private Auth: AuthService) { }

  ngOnInit(): void {
    let userInfo = this.Auth.userInfoLogin;
    if(userInfo !== undefined){
      let token = userInfo.token
      this.http.get<ProductCart[]>(environment.apiHost + '/api/v1/cart', {
        headers: {
          Authorization: 'Bearer ' + token
        }
      }).subscribe(data => {
        this.items = data;
      })
    }
  }

}
