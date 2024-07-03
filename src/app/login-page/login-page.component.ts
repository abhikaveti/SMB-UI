import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ValidateCredsService } from 'src/app/services/validate-creds.service';
import { ValidateCredsRequest } from 'src/app/models/validate-creds-request';

@Component({
  selector: 'app-login-page',
  standalone:true,
  imports:[ReactiveFormsModule, CommonModule],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  
  constructor(private validateCreds:ValidateCredsService, private router:Router, private fb:FormBuilder){
    
  }
  
  username:any;
  password: any;
  data:any;
  
  loginForm = this.fb.group({
    userName:['',[Validators.required]],
    passWord:['',[Validators.required]]
  });

  get userName(){
    return this.loginForm.get('userName');
  }

  get passWord(){
    return this.loginForm.get('passWord');
  }

  logIn(){
    this.username = this.userName?.value?.toLowerCase();
    this.password = this.passWord?.value;
    const validateReq: ValidateCredsRequest = new ValidateCredsRequest(this.username,this.password);
    console.log(validateReq);
    
    this.validateCreds.validate(validateReq).subscribe(
      response =>{
        if(response.valid === 'Valid'){
          this.router.navigate(['/home', this.encrypt(this.username)]);
        }
      },
      error => {
       console.error(error);
      }
    );

  }


  encrypt(userId:string){
    let res: string ='';
    for(let i = 0; i < userId.length-1; i++){
      res+=userId.charCodeAt(i)+'-';
    }
    res+=userId.charCodeAt(userId.length-1);
    console.log(res);
    
    return res;

  }

  
}