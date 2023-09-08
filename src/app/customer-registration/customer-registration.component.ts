import { Component , Input , Output , EventEmitter , ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent {

  /*decorator which is  for takes the data from parent*/
  @Input('CustomerInfo') CustomerInfo:any;

  /*Output decorator which is for sends the data to the parent*/


  /*
     1. Before send we need the data . who will prepare that ? who will be take care generally prepare the data for send(Name , email ,  password)
     Ans : Eventemitter

     2. What is event emitter ?
     Ans : Which is for emits | inject |  the data into it  
           So that  what ever we are having the injected data in the eventemitter , we can refer that data to the output 
     
  */

  @Output('CustomerEventEmitter') cutomerEmitter  = new  EventEmitter<any>();

  @ViewChild('CustomerName') vCustomerName : ElementRef
  @ViewChild('CustomerEmail') vCustomerEmail: ElementRef;
  @ViewChild('CustomerPassword') vCustomerPassword: ElementRef;

  evtPostData(){
   let customerObj = {
        Name : this.vCustomerName.nativeElement.value,
        Email: this.vCustomerEmail.nativeElement.value,
        Password: this.vCustomerPassword.nativeElement.value,
    }
    this.cutomerEmitter.emit(customerObj);
  }




// Here Customer info contains the below data
//  { 
//     Name: 'Robert',
//     Email: 'Robert@gmail.com', 
//     Password: '!@&&*9*'
//  };


  //var  customer : string = "JOhn";

}
