import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent {

    @Input('LatestInputCustomerRecord') CusomerRecord:any;

    // var                              name        : string

}
