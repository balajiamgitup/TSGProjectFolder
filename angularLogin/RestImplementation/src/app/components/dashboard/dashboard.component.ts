import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
//import{ApiService} from './../../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  public users:any=[];
 constructor(private auth:AuthService,){

 }
  ngOnInit(): void {

  }
  logOut(){
this.auth.signOut();
  }
}
