import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
 public dateToday="";
 public name ="";
  constructor(){}
  title = 'angpra';
  public hashError=false;
  public check=false  ;
   //public name=" ";
   public color=["red","yelow","orange","blue"];
  public myId="testId";
greetUser(){

  return "Hello"+this.title;
}
ngOnInit(): void {

  this.dateToday = new Date().toDateString();

  this.name = "Simplilearn"

}
onClick(value:any){
  console.log(value+"Welcome to event binding");
}

public employee=[
  {"id":1 ,"name":"Balaji","age":23},
  {"id":2 ,"name":"Dinga","age":24},
  {"id":3 ,"name":"Dingi","age":27},
]


}
