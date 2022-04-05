import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable , of} from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfigService } from '../../config/config.service';
import { Specialite } from '../specialite.model';

@Component({
  selector: 'app-all-specialite',
  templateUrl: './all-specialite.component.html',
  styleUrls: ['./all-specialite.component.scss']
})
export class AllSpecialiteComponent implements OnInit {

  submitted:boolean;
  categorieFormGroup?:FormGroup;
  specialite:any;
  searched:any="";
  
  constructor(private configService:ConfigService,
             private fb:FormBuilder,
              private router:Router) { }

ngOnInit(): void {
  this.onGetAllSpecialite()
 }


onGetAllSpecialite(){
  this.configService.getAllSpecialites()
      .subscribe((data:any) =>{
        this.specialite = data.specialites
         },err=>{
           console.log(err);
       })
  }



onDelete(c: Specialite){
  this.configService.DeleteSpecialite(c.id)
    .subscribe(data=>{
       this.onGetAllSpecialite();
      })
  }

  onSaveSpecialite(){
    this.router.navigateByUrl("/newSpecialite")
    
  }
  onUpdateSpecialite(c:Specialite){
    this.router.navigateByUrl("/editSpecialite/"+c.id)
  }

}
