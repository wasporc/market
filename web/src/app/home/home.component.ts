import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../environments/environment";
import { AuthService } from '../auth.service';

export interface Product {
  id: number,
  name: string,
  price: number
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pageOfProduct: Product[] | undefined;
  items: Product[] | undefined ;

  constructor(private http: HttpClient,private Auth: AuthService) { }

  ngOnInit() {
    this.http.get<Product[]>(environment.apiHost + '/api/v1/products')
      .subscribe(data => {
        this.items = data;
        // console.log('items', this.items);
      });
  }
  onChangePage(pageOfItems: Product[]){
    // console.log('pageOfItems',pageOfItems);
    this.pageOfProduct = pageOfItems;
  }

}
