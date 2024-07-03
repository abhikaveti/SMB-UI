import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { ValidateCredsRequest } from '../models/validate-creds-request';
import { CreateUserRequest } from '../models/cretate-user-request';
import { CreateGroupRequest } from '../models/create-group-request.model';

@Injectable({
  providedIn: 'root'
})
export class ValidateCredsService {

  constructor(private http:HttpClient) { }

  url = 'http://localhost:8080';
  private data :any;

  validate(request:ValidateCredsRequest): Observable<any> {
    
    return this.http.post(this.url+'/validateUser', request);
  }

  getUserDetails(Id:string) : Observable<any>{
    return this.http.get(this.url+'/users/'+Id);
  }

  saveUser(userData:CreateUserRequest){
    console.log('in service', userData);
    
    return this.http.post(this.url+'/saveuser', userData);
  }

  getUsers() : Observable<any>{
    return this.http.get(this.url+'/users');
  }

  createGrp(userData: CreateGroupRequest) : Observable<any>{
    return this.http.post(this.url+'/createGroup', userData);
  }

  getGroupsByUserId(userId : String) : Observable<any>{
    return this.http.post(this.url+'/getGroupsbyUserId', userId);
  }

  getGroupDetails(groupId:String) : Observable<any>{
    return this.http.get(this.url+'/getGroupDetailsById/'+groupId);
  }

}
