import { Component, OnInit } from '@angular/core';
import { userService } from 'app/haya/shared/services/user.service';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';
import { Provider } from 'app/modules/admin/users/provider.model'



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
 
  errorMessage=''
 providers:Provider[] = []; 
 
  constructor( private userService: userService, 
    private router:Router) { }

  ngOnInit(): void {
       this.userService.getAllProvide()
       .subscribe(
         (res:any)=>{
           this.providers = res.users;
          },err=>{
            console.log(err);
          })
  }

  approuver(id:number){
    console.log("approuver",id)
    this.userService.approveProvider(id).subscribe((data)=>{
      this.userService.getAllProvide()
       .subscribe(
         (res:any)=>{
            this.providers = res.users;
          },err=>{
            console.log(err);
          })
    })
  }
   



  onApproveProvider(data:any){
    this.userService.approveProvider(data)
    .subscribe(data => {
      console.log(data);
    },
      error => {
        this.errorMessage = error;
      });
 }

   
  }






