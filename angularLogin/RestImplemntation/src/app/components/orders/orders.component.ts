import { Component,OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  order:any=[];
  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    this.auth.getAllItems().subscribe((data: any[])=>{
      // this.items = data;
      // console.log(this.items);

    })

    this.order= this.auth.orderListObj;
  }
}
