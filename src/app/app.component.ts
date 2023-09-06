import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Customer = { 
        Name: 'Robert',
        Email: 'Robert@gmail.com', 
        Password: '!@&&*9*'
     };
}
