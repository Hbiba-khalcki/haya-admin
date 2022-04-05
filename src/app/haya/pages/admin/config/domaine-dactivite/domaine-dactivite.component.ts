import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Categorie } from '../config.model';
import { ConfigService } from '../config.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-domaine-dactivite',
  templateUrl: './domaine-dactivite.component.html',
  styleUrls: ['./domaine-dactivite.component.scss']
})
export class DomaineDactiviteComponent implements OnInit  {


  submitted:boolean;
  categorieFormGroup?:FormGroup;
  categorie:any;
  searched:any="";
  
  constructor(private configService:ConfigService,
             private fb:FormBuilder,
              private router:Router) { }

ngOnInit(): void {
  this.onGetAllCategorie()
 }

onGetAllCategorie(){
  this.configService.getAllCategories()
      .subscribe((data:any) =>{

        this.categorie = data.categories

         },err=>{
           console.log(err);
         })
  }


  onDelete(c: Categorie){
    this.configService.DeleteCategorie(c.id)
      .subscribe(data=>{
        this.onGetAllCategorie();
      })
  }

  onSaveCategorie(){
    this.router.navigateByUrl("/newCategorie")
    
  }
  onUpdateCategorie(c:Categorie){
    this.router.navigateByUrl("/editCategorie/"+c.id)
  }
  onInfosCategorie(c:Categorie){
    this.router.navigateByUrl("/infocategories/"+c.id)
  }




  }


