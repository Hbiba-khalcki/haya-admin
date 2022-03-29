import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {
    constructor(){
        
    }
    getElement(elementName:string){
      return localStorage.getItem('elementName')
    }
    private removeElement(elementName:string){
        return localStorage.removeItem('elementName')
        
    }
    setElement(elementName:string, elementValue:string){
     return localStorage.setItem('elementName', elementValue)
    }
  

    empty(){
        this.removeElement("user")
        this.removeElement("role")
    }
}