import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Categorie } from '../../config/config.model';
import { ConfigService } from '../../config/config.service';

@Component({
  selector: 'app-add-specialite',
  templateUrl: './add-specialite.component.html',
  styleUrls: ['./add-specialite.component.scss']
})
export class AddSpecialiteComponent implements OnInit {
  specialiteFormGroup?:FormGroup;
  categorie:Categorie;
  constructor(private fb:FormBuilder,
               private configService:ConfigService,
               private router:Router) { }
  
  ngOnInit(): void {
    this.specialiteFormGroup=this.fb.group({
        name:["",Validators.required],
        description:["",Validators.required],
        category:[null,Validators.required],
 
     });
     this.onGetAllCategorie()
  }
  
  onGetAllCategorie(){
    this.configService.getAllCategories()
        .subscribe((data:any) =>{
          this.categorie = data.categories
          console.log("ttttttttttt",this.categorie)
           },err=>{
             console.log(err);
           })
    }
  
  onSaveSpecialite(){
    this.configService.saveSpecialite(this.specialiteFormGroup?.value).subscribe(data=>{
     alert("succes save")
       this.router.navigateByUrl("/specialite")
      });
      this.specialiteFormGroup.reset() 
     
      
    }
  }
