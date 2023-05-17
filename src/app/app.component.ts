import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
// Here defines the components
export class AppComponent {
    // Definition of variables, these variables can receive values ​​in html files.
    title = 'Angular WD17302 FPT Polytechnic Ha Noi';
    products = [
        {
            id: '1',
            name: 'Product A',
            price: 1000,
            img: 'https://picsum.photos/200/200',
        },
        {
            id: '2',
            name: 'Product B',
            price: 2000,
            img: 'https://picsum.photos/200/200',
        },
        {
            id: '3',
            name: 'Product C',
            price: 3000,
            img: 'https://picsum.photos/200/200',
        },
    ];
}
