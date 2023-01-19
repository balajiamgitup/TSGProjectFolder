import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
//total:any=0;
x:any=0;
tables:any[]=[{
  tableNumber:401},{tableNumber:402},{tableNumber:403},{tableNumber:405}];

  orderItems:any[]=[];

// arrayOfArray : any= [
//   {name: 'john', age: '12'},
//   {name: 'asim', age: '29'},
//   {name: 'doe', age: '21'},
//   {name: 'sinha', age: '11'}
// ];
//orderListObj:any = [];
constructor(private fb:FormBuilder,public authService: AuthService ,private router:Router) { }

signUpForm!:FormGroup;
// ngOnInit(): void{
//   this.signUpForm=this.fb.group({
//     UserName:['',Validators.required],
//   Email:['',Validators.required],
//   Password:['',Validators.required],
//   ConfirmPassword:['',Validators.required],

//   })
//   }
ngOnInit(): void {
  this.signUpForm=this.fb.group({
   table:['',Validators.required],});
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
  this.orderItems.push(item);
  console.log(this.orderItems);
 // console.log(this.orderItems);
  this.price.push( item.price);
  sessionStorage.setItem('OrderList',JSON.stringify(item));
  alert("Order added sucessfully, If you are done please click send order");
}

sendOrder()
{
    let orderList:any =  sessionStorage.getItem("OrderList");
    orderList = JSON.parse(orderList);
   // console.log("order"+ orderList);

    for(let a of this.price){
      console.log("orderList before add",  a +" "+ this.x+" "+this.authService.total );
      this.authService.total+=Number(a);

      console.log("orderList",  a +" "+ this.x+" "+this.authService.total );
    }

    // wirte api call to and on sucess show alert
    alert("All orders send sucessfully");

    this.router.navigate(['orders']);
  }

  // selecTable(table:any){
  // console.log(table.target.value);
  // }
  changeWebsite(e:any) {
    this.authService.table=e.target.value;
    console.log(e.target.value);
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
