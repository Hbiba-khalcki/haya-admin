import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Specialite } from '../../specialite/specialite.model';

@Component({
  selector: 'app-info-categorie',
  templateUrl: './info-categorie.component.html',
  styleUrls: ['./info-categorie.component.scss']
})

export class InfoCategorieComponent implements OnInit {
  categorieId:number;
  categorie:any; 
  name:any
  specialite= {}

constructor(
    private configService:ConfigService,
    private router:Router,
    private activatedRoute:ActivatedRoute,) { 
  this.categorieId= activatedRoute.snapshot.params.id;
  }

ngOnInit(): void {
   this.onInfosCategorie()
     
    }
  
  
    
onInfosCategorie(){
    this.configService.getCategorie(this.categorieId)
      .subscribe((res:any) =>{
          this.categorie = res.categorie
          this.specialite = res.specialites;
        },err=>{
          console.log(err);
        })
  }

onGetAllSpecialite(){
  this.configService.getAllSpecialites()
      .subscribe((data:any) =>{
        this.specialite = data.specialites
         },err=>{
           console.log(err);
     })
}

onDelete(c: number){
    this.configService.DeleteSpecialite(c)
      .subscribe(data=>{
        this.onGetAllSpecialite();
      })
}

onUpdateSpecialite(c:Specialite){
  this.router.navigateByUrl("/editSpecialite")
}


onDeleteSpecialite(c: Specialite){
 this.router.navigateByUrl("/allSpecialite")
  }

  onSaveSpecialite(){
    this.router.navigateByUrl("/newSpecialite")
    
  }


}
