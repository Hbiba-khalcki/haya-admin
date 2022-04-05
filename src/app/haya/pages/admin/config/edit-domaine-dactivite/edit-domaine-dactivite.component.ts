import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfigService } from '../config.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-domaine-dactivite',
  templateUrl: './edit-domaine-dactivite.component.html',
  styleUrls: ['./edit-domaine-dactivite.component.scss']
})
export class EditDomaineDactiviteComponent implements OnInit {
  CategorieId:number;
  categorieFormGroup?:FormGroup;
  submitted:boolean;
  constructor(private fb:FormBuilder,
              private configService:ConfigService,
              private router:Router,
              private activatedRoute:ActivatedRoute,) { 
 this.CategorieId= activatedRoute.snapshot.params.id;
}

ngOnInit(): void {
    this.configService.getCategorie(this.CategorieId)
    .subscribe((res:any) =>{
      const categorie = res.categorie
    this.categorieFormGroup=this.fb.group({
      name:[categorie.name,Validators.required],
      description:[categorie.description,Validators.required],
      id:[categorie.id,Validators.required]
    });
  })
  }


  onUpdateCategorie(){
    this.configService.updateCategorie(this.categorieFormGroup?.value)
    .subscribe(data=>{
      alert("update success");
      this.router.navigateByUrl("/categorie")
    });
  }

}
