import { Component } from '@angular/core';
import { Inventor } from './components/models/Inventor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FPT Polytechnic';
  student={
    fullName: "Đồng Công Định",
    sex : "Male",
    birthday : "11/11/2002",
    avatar : "avatar.png",
    score : 8
  }
  inventors: Inventor[] = [
    {id : 1,first: 'Albert', last: 'Einstein', year: 1879, passed: 1955},
    {id : 2,first: 'Isaac', last: 'Newton', year: 1643, passed: 1727},
    {id : 3,first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642},
    {id : 4,first: 'Marie', last: 'Curie', year: 1867, passed: 1934},
    {id : 5,first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630},
    {id : 6,first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543},
  ]
}
