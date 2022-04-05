import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { userService } from 'app/haya/shared/services/user.service';
import { Observable } from 'rxjs';
import { MatSelectChange } from '@angular/material/select';
import { Router } from '@angular/router';
import { Provider } from 'app/haya/pages/admin/users/provider.model';
import { BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit , AfterViewInit{
//pagination
  public displayedColumns = ['username', 'email', 'date_joined','approuver'];
  public dataSource = new MatTableDataSource<Provider>();
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
//fin pagination

 
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
 


//paginations

ngAfterViewInit(): void {
  this.dataSource.sort = this.sort;
  this.dataSource.paginator = this.paginator;
}

public customSort = (event) => {
  console.log(event);
}

public doFilter = (value: string) => {
  this.dataSource.filter = value.trim().toLocaleLowerCase();
}

}
 






