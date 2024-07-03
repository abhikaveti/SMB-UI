import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateGroupRequest } from 'src/app/models/create-group-request.model';
import { ValidateCredsService } from 'src/app/services/validate-creds.service';

@Component({
  selector: 'app-create-group',
  standalone:true,
  imports:[ReactiveFormsModule, CommonModule],
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent {

  constructor(private router:Router, private fb:FormBuilder, private service:ValidateCredsService){

  }

  @Input('username') userName:any;
  isGroupNameExist : boolean = false;
  groupCreated:boolean=false;

  createGrpForm = this.fb.group({
    groupName:['',[Validators.required]]
  });

  get groupName(){
    return this.createGrpForm.get('groupName');
  }

  createGrp(){
    let groupId = this.generateGroupId(this.userName);
    let userData = new CreateGroupRequest(this.userName,this.groupName?.value, groupId);
    console.log(userData);

    this.service.getGroupsByUserId(this.userName).subscribe(response=>{
      console.log(response);
      
      for(let grp in response){
          if(response[grp].groupName === this.groupName?.value){
            this.isGroupNameExist=true;
            this.groupName?.setErrors({'invalid':true});
            break;
          }
        }
    }, error=>{
      console.error(error);
      
    });
    
    this.service.createGrp(userData).subscribe(response =>{
    document.location.reload();
    },
  error=>{
    console.error(error);
    
  });
  }

  generateGroupId(userName:string):string{
    let groupId = userName.substring(0,2) + new Date().toISOString().toString().substring(17).replaceAll('.','');
    return groupId;
  }

}
