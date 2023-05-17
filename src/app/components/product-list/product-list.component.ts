import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  @Input() products: any;
  removeItem(id: any){
    const confirm = window.confirm("Bạn có muốn xóa?");
    if(confirm){
      this.products = this.products.filter((item: any) => item.id != id)
    }
  }
}
