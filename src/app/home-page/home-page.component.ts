import { CommonModule } from '@angular/common';
import { Component, Injectable} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ValidateCredsService } from 'src/app/services/validate-creds.service';
import { CreateGroupComponent } from './create-group/create-group/create-group.component';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-home-page',
  standalone:true,
  imports:[ReactiveFormsModule, CommonModule, CreateGroupComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  encryptedId:any;
  username:any;
  groups:any;
  createGroup:boolean=false;

  constructor(private service:ValidateCredsService, private route: Router, private router: ActivatedRoute){
    this.router.params?.subscribe(params => {
      console.log('Paramss',params);
      this.encryptedId=params['id'];
      this.username = this.decrypt(params['id']);
      this.getUserDetails(this.username);
    });
  }

  decrypt(id:string){
    let res:string='';
    let idArray: String[] = id.split('-');
    for(let i in idArray){
      res += String.fromCharCode(Number(idArray[i]));
    }
    console.log(res);
    return res;
  }
  
  logout(){
    console.clear();
    console.log('Logging out...');
    this.route.navigate(['']);
  }

  getUserDetails(userName:string){
    console.log(userName);
      this.service.getUserDetails(userName).subscribe(
        data=>{
          this.groups=data.groups;
          console.log('this.groups',this.groups);
          
        },
        error=>{console.error(error)}
      );
  }

  getGroup(groupId: String){
    console.log(groupId);
    this.route.navigate(['/groupdetails',groupId]);
  }

}
