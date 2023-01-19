import { Injectable } from '@angular/core';
import{HttpClient} from "@angular/common/http";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   private baseUrl:string="http://localhost:5073/api/Authenticate/";
    private restUrl:string="https://localhost:7137/api/Rest/";



  constructor(private http:HttpClient,private router:Router) { }
  signUp(userObj:any){
 return this.http.post<any>(`${this.baseUrl}register`,userObj)
  }
  login(loginObj:any){
    return this.http.post<any>(`${this.baseUrl}login`,loginObj)
  }

  signOut(){
    localStorage.clear();
  this.router.navigate(['login']);
  }
//storing token
  storeToken(tokenValue:string){
    localStorage.setItem('token',tokenValue)
  }
//getting token
  getToken(){
    return localStorage.getItem('token')
  }

  isLoggedIn():boolean
{
  return !!localStorage.getItem('token')
}
//////Restaurent Api calling

getAllItems() :Observable<any[]>{
 return  this.http.get<any[]>(this.restUrl + 'GetItem');
}

orderListObj:any = [];
orderItem:any=[ ];
}
