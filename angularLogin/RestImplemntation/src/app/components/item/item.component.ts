import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit{
[x: string]: any;
items:any=[];
price:any=[];
total:any;
x:any;

// arrayOfArray : any= [
//   {name: 'john', age: '12'},
//   {name: 'asim', age: '29'},
//   {name: 'doe', age: '21'},
//   {name: 'sinha', age: '11'}
// ];
//orderListObj:any = [];
constructor(public authService: AuthService ,private router:Router) { }

ngOnInit(): void {
  this.authService.getAllItems().subscribe((data: any[])=>{
    this.items = data;
    console.log(this.items);

  })
}
onClickOrder(id:any){

  for (var order of this.items){
    if(order.itemID==id){
      this.authService.orderItem.push(this.items);

      console.log(this.items);
    }
  }
}

addOrder(item:any){
  this.authService.orderListObj.push(item);
  this.price.push( item.price);
  sessionStorage.setItem('OrderList',JSON.stringify(item));
  alert("Order added sucessfully, If you are done please click send order");
}

sendOrder()
{
    let orderList:any =  sessionStorage.getItem("OrderList");
    orderList = JSON.parse(orderList);

    for(let a of this.price){
      this.total=a;
      this.x+a;

      console.log("orderList",  this.price +" "+ this.x );
    }



 // this.total+=this.price;

    //console.log("orderList",  this.price);
   // orderList.price =orderList.price +this.total;

    // wirte api call to and on sucess show alert
    alert("All orders send sucessfully");

    this.router.navigate(['orders']);
  }
}


// this.authService.getAllItems().subscribe({
//     next:(items)=>{
//       console.log(items);
//     },
//     error:(response)=>{
//       console.log(response);
//     }
//   }
//   )
