import { Component } from '@angular/core';
import { Apiservices } from '../../apiservices';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {products:any[]=[];constructor(private apiservices:Apiservices) {}
ngoninit() {
  this.apiservices.getproduct().subscribe((data:any) => {
    this.products = data;
    console.log(data);
  
})
}
}