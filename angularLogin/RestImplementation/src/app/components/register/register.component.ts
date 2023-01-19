import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  implements OnInit{
  signUpForm!:FormGroup;
  type : string = "password";

  isText: boolean =false;

  eyeIcon: string = "fa-eye-slash";
  constructor(private fb:FormBuilder, private auth:AuthService, private router:Router){}
  ngOnInit(): void{
    this.signUpForm=this.fb.group({
      UserName:['',Validators.required],
    Email:['',Validators.required],
    Password:['',Validators.required],
    ConfirmPassword:['',Validators.required],

    })
    }
    hideShowPass(){

      this.isText = !this.isText;

      this.isText ? this.eyeIcon="fa-eye" : this.eyeIcon = "fa-eye-slash";

      this.isText ? this.type="text": this.type = "password";

   }
  //   onSignUp(){
  //     if(this.signUpForm.valid){
  //  //send obnject to DB
  //  console.log(this.signUpForm.value);
  //     }
  //     else{
  //  //throgh error
  //  console.log("Form is not valid")
  //  this.validateAllFormFields(this.signUpForm);
  //  alert("Your form is invalid");
  //     }
  //   }

  onSignUp(){
    if(this.signUpForm.valid){
       //send obnject to DB
       this.auth.signUp(this.signUpForm.value).subscribe({
         next:(res=>{
           alert(res.message);
           this.signUpForm.reset();
           this.router.navigate(['/', 'Login']);

         }),
         error:(err=>{
           alert(err .error.message)
         })
       })
       console.log(this.signUpForm.value);
          }
          else{
       //throgh error
       console.log("Form is not valid")
       this.validateAllFormFields(this.signUpForm);
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
