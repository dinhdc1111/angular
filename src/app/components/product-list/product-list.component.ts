import { ProductService } from './../../services/product.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: IProduct[] = [];
  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
  // @Input() products: any;
  // @Output() onRemove = new EventEmitter<any>();
  // removeItem(id: any) {
  //   this.onRemove.emit(id);
  // }
}
