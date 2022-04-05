import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfigService } from '../config.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-domaine-dactivite',
  templateUrl: './add-domaine-dactivite.component.html',
  styleUrls: ['./add-domaine-dactivite.component.scss']
})
export class AddDomaineDactiviteComponent implements OnInit {
categorieFormGroup?:FormGroup;

constructor(private fb:FormBuilder,
             private configService:ConfigService,
             private router:Router) { }

ngOnInit(): void {
  this.categorieFormGroup=this.fb.group({
      name:["",Validators.required],
      description:["",Validators.required],
      file  : [null,Validators.required], 
   });
}

onChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.categorieFormGroup.get('file').setValue(file);
    }
}

onSaveCategorie(){

  const formData = new FormData();
  formData.append('file', this.categorieFormGroup.get('file').value);
  formData.append('name', this.categorieFormGroup.get('name').value);
  formData.append('description', this.categorieFormGroup.get('description').value);

  this.configService.saveCategorie(formData).subscribe(data=>{
   alert("succes save")
     this.router.navigateByUrl("/categorie")
    });
    this.categorieFormGroup.reset() 
   
    
  }
}
