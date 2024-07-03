import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule,Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CreateUserRequest } from 'src/app/models/cretate-user-request';
import { ValidateCredsService } from 'src/app/services/validate-creds.service';

@Component({
  selector: 'app-create-new-account',
  standalone: true,
  imports: [CommonModule,  ReactiveFormsModule],
  templateUrl: './create-new-account.component.html',
  styleUrls: ['./create-new-account.component.css']
})
export class CreateNewAccountComponent {
  username:any;
  firstName:any;
  surname:any;
  email:any;
  password:any;
  isRegistrationSuccess:any;
  dateOfBirth:any;
  users: CreateUserRequest[]=[]; 
  isUserNameTaken: boolean=false;

  constructor(private fb:FormBuilder, private createUserRequest:CreateUserRequest, private service:ValidateCredsService, private route:Router){
  }

  signUpForm = this.fb.group({
    username : ['', [Validators.required, Validators.minLength(3)]],
    firstName : ['', [Validators.required, Validators.pattern('[a-zA-z ]*')]],
    surname : ['', [Validators.required, Validators.pattern('[a-zA-z ]*')]],
    email : ['', [Validators.required, Validators.pattern('^[a-zA-z.0-9]+@([a-zA-z]+.)+[a-zA-Z-]{2,4}$')]],
    password : ['', [Validators.required,Validators.minLength(8)]],
    dateOfBirth : ['', Validators.required]
  });

  get userName(){
    return this.signUpForm.get('username');
  }

  get firstname(){
    return this.signUpForm.get('firstName');
  }

  get Email(){
    return this.signUpForm.get('email');
  }

  get passWord(){
    return this.signUpForm.get('password');
  }

  get DOB(){
    return this.signUpForm.get('dateOfBirth');
  }

  get surName(){
    return this.signUpForm.get('surname');
  }

  submitForm(){
    this.username = this.signUpForm.get('username')?.value?.toLowerCase();
    this.firstName = this.signUpForm.get('firstName')?.value;
    this.surname = this.signUpForm.get('surname')?.value;
    this.email = this.signUpForm.get('email')?.value;
    this.password = this.signUpForm.get('password')?.value;
    this.dateOfBirth = this.signUpForm.get('dateOfBirth')?.value;
    
    this.createUserRequest = this.createUserRequest.User(this.username,this.firstName, this.surname, this.email, this.password, this.dateOfBirth);
    
    console.log(this.createUserRequest)

    this.service.saveUser(this.createUserRequest).subscribe(response=>{
      console.log(response);
      this.isRegistrationSuccess = response;

    }, 
  error=>{
    console.log(error);
    
  })
    
  }

  getUserDetails(){
    if(this.userName?.invalid){
      return;
    }    

    const username = this.userName?.value?.toLowerCase();

    if(this.users.length === 0){
      this.service.getUsers().subscribe(response =>{
        this.users=response;
        console.log('users:--', this.users);
      });
    }

    for(let x in this.users){
      if(username === this.users[x].username.toLowerCase()){
        this.isUserNameTaken = true;
        this.userName?.setErrors({'invalid':true});
        break;
      }else{
        this.isUserNameTaken=false;        
      }
    }
    
  }
  
}
