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


  /* Prepare this object for send the data to the customer Customer Registraion Latest Record  component*/
     CustomerLatestRecord = {};

  evtCustomerReceiveInfo(event:any){
     this.Customer =  event;
     this.CustomerLatestRecord = event;
  }
  
}
