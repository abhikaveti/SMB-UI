import { Component } from '@angular/core';
import { ValidateCredsService } from '../services/validate-creds.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.css']
})
export class GroupDetailsComponent {

  groupId:any;
  grpDetails : any;

  constructor(private service:ValidateCredsService, private route:Router, private router:ActivatedRoute){
    this.router.params.subscribe(params=>{
      this.groupId = params['groupId'];
      this.service.getGroupDetails(this.groupId).subscribe(response=>{
        this.grpDetails = response;
        console.log(response);
        
      }, error=>{
        console.error(error);
        
      });
    });
  }

  addMember(){
    console.log('addinng a member');
    
  }

}
