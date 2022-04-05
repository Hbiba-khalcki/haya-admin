import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { from, Observable } from "rxjs";
import { Specialite } from "../specialite/specialite.model";
import { Categorie } from "./config.model";


@Injectable({providedIn:"root"})
export class ConfigService {

    constructor(private http:HttpClient){
    }
    
    saveCategorie(formData){
        let host=environment.apiUrl;
        return this.http.post<Categorie[]>(host+ "/config/categories",formData);
      }

    getCategorie(id:number|null):Observable<Categorie>{
        let host=environment.apiUrl;
        return this.http.get<Categorie>(host+ "/config/categories/"+id);

    }
    getAllCategories():Observable<Categorie[]>{
        let host=environment.apiUrl;

        return this.http.get<Categorie[]>(host+"/config/categories/");
    }


    get(id) {
      let host=environment.apiUrl;
      return this.http.get(host+"/config/categories/${id}");
    }

    DeleteCategorie(cid: number):Observable<void>{
    let host=environment.apiUrl;
    return  this.http.delete<void>(host+ "/config/categories/"+cid);
    }
    
    infosCategorie(cid:number):Observable<Categorie>{
      let host=environment.apiUrl;
      return this.http.get<Categorie>(host+ "/config/categories/"+cid);
    }

    
    updateCategorie(categorie:Categorie):Observable<Categorie>{
       let host=environment.apiUrl;
      return this.http.put<Categorie>(host+"/config/categories/"+categorie.id,categorie);
    }

    SearchCategorie(keyword:string):Observable<Categorie[]>{
        let host=environment.apiUrl;
        return this.http.get<Categorie[]>(host+ "/categorie?name_like="+keyword);
      }

// Crud specialite 


    saveSpecialite(specialite:Specialite):Observable<Specialite[]>{
      let host=environment.apiUrl;
      return this.http.post<Specialite[]>(host+ "/config/specialites/",specialite);
    }

    getSpecialite(id:number|null):Observable<Specialite>{
      let host=environment.apiUrl;
      return this.http.get<Specialite>(host+ "/config/specialites/"+id);

    }
    getAllSpecialites():Observable<Specialite[]>{
      let host=environment.apiUrl;
      return this.http.get<Specialite[]>(host+"/config/specialites/");
    }

 
    DeleteSpecialite(id: number):Observable<void>{
    let host=environment.apiUrl;
    return  this.http.delete<void>(host+ "/config/specialites/"+id);
    }


    updateSpecialite(specialite:Specialite):Observable<Specialite>{
    let host=environment.apiUrl;
    return this.http.put<Specialite>(host+"/config/specialites/"+specialite.id,specialite);
    }

    SearchSpecialite(keyword:string):Observable<Specialite[]>{
      let host=environment.apiUrl;
      return this.http.get<Specialite[]>(host+ "/specialite?name_like="+keyword);
    }

}
        
