import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from '../../config/config.model';
import { ConfigService } from '../../config/config.service';

@Component({
  selector: 'app-edit-specialite',
  templateUrl: './edit-specialite.component.html',
  styleUrls: ['./edit-specialite.component.scss']
})

export class EditSpecialiteComponent implements OnInit {

  SpecialiteId:number;
  specialiteFormGroup?:FormGroup;
  submitted:boolean;
  categorie:Categorie;

  constructor(private fb:FormBuilder,
              private configService:ConfigService,
              private router:Router,
              private activatedRoute:ActivatedRoute,) { 
    this.SpecialiteId = activatedRoute.snapshot.params.id;   
}

ngOnInit(): void {
    this.configService.getSpecialite(this.SpecialiteId)
    .subscribe((res:any) =>{
      const specialite = res.specialite
    this.specialiteFormGroup=this.fb.group({
      name:[specialite.name,Validators.required],
      description:[specialite.description,Validators.required],
      id:[specialite.id,Validators.required],
      category:[null,Validators.required],
    });
  })
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
  

onUpdateSpecialite(){
    this.configService.updateSpecialite(this.specialiteFormGroup?.value).subscribe(data=>{
     alert("succes save")
       this.router.navigateByUrl("/specialite")
      });
      this.specialiteFormGroup.reset() 
     
      
    }
}
