import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent {

  @Input('CustomerInfo') CustomerInfo:any;

// Here Customer info contains the below data
//  { 
//     Name: 'Robert',
//     Email: 'Robert@gmail.com', 
//     Password: '!@&&*9*'
//  };


  //var  customer : string = "JOhn";

}
