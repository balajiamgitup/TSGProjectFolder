import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm!:FormGroup;
  constructor(private fb:FormBuilder ,private auth:AuthService, private router:Router){}

  ngOnInit():void{
  this.loginForm=this.fb.group({
    username:['',Validators.required],
    Password:['',Validators.required],
  })
  }
  type:string="password"
  hideShowPass(){

 }

 onSubmit(){
   if(this.loginForm.valid){
//send obnject to DB
this.auth.login(this.loginForm.value)
.subscribe({
  next:(res)=>{
    console.log("Res: ", res);
    alert(res.message);
    if(res.message=="Login Success!"){
    this.loginForm.reset();
    this.auth.storeToken(res.token);
    this.router.navigate(['dashboard']);}
  },
  error:(err)=>{
    console.log("Error: ", err)
    alert(err?.error.message);
  }
})
console.log(this.loginForm.value);

   }
   else{
//throgh error
console.log("Form is not valid")
this.validateAllFormFields(this.loginForm);
alert("Your form is invalid");
   }
 }
 private validateAllFormFields(formGroup:FormGroup){
   Object.keys(formGroup.controls).forEach(field=>{
     const control = formGroup.get(field);
     if(control instanceof FormControl){
       control.markAsDirty({onlySelf:true});
     }else if(control instanceof FormGroup){
  this.validateAllFormFields(control)
     }
   })
 }
}
