import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ValidateCredsService } from 'src/app/services/validate-creds.service';
import { CreateUserRequest } from 'src/app/models/cretate-user-request';
import { PasswordValidator } from 'src/app/validators/password.validator';

@Component({
  selector: 'app-forgot-component',
  standalone:true,
  imports:[CommonModule,  ReactiveFormsModule],
  templateUrl: './forgot-component.component.html',
  styleUrls: ['./forgot-component.component.css']
})
export class ForgotComponentComponent {

  newPassword:any;
  reEnteredPwd:any;
  username:any;
  isPasswordChanged:any=false;
  passwordsDontMatch:boolean=false;
  userNotFound:boolean=false;
  users: CreateUserRequest[]=[];
  user: any;



  constructor(private service:ValidateCredsService, private route:Router, private fb:FormBuilder){

  }

  forgotPasswordForm = this.fb.group({
    newpassword:['', [Validators.required,Validators.minLength(8)]],
    confirmPassword:['', [Validators.required,Validators.minLength(8)]],
    userName:['', [Validators.required, Validators.minLength(3)]]
  }, {validator:PasswordValidator});

  get userName(){
    return this.forgotPasswordForm.get('userName');
  }

  get newpassWord(){
    return this.forgotPasswordForm.get('newpassword');
  }

  get confirmPassword(){
    return this.forgotPasswordForm.get('confirmPassword');
  }

  resetPassword(){
    this.username = this.userName?.value;
    this.newPassword = this.newpassWord?.value;
    this.reEnteredPwd = this.confirmPassword?.value;

    console.log(this.forgotPasswordForm.errors);
    

    if(!this.userNotFound){
      console.log('before password update',this.user);
      this.user.password=this.newPassword.value;
      console.log('after password update',this.user);
      
      this.service.saveUser(this.user).subscribe(isUpdated=>{
        console.log(isUpdated);
        this.isPasswordChanged = isUpdated;
      },error=>{
        this.isPasswordChanged=false;
        console.log(error);
        
      });
    }
  }

  getUserDetails(){
    if(this.userName?.invalid){
      return;
    }    

    const username = this.userName?.value?.toLowerCase();

    if(this.users.length === 0){
      this.service.getUsers().subscribe(response =>{
        this.users=response;
        console.log('fgt pwd comp:--', this.users);
      });
    }

    for(let x in this.users){
      if(username !== this.users[x].username.toLowerCase()){
        console.log('id not found');
        
        this.userNotFound = true;
        this.userName?.setErrors({'invalid':true});
      }else{
        console.log('id found')
        this.userNotFound=false; 
        this.user = this.users[x];   
        this.userName?.clearValidators();
        this.userName?.updateValueAndValidity();
        break;
      }
    }    
  }

}
