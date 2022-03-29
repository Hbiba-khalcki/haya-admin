import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Provider } from "app/modules/admin/users/provider.model";

import { environment } from "environments/environment";
import { Observable} from "rxjs";


import { map } from "rxjs/operators";

let headers = new HttpHeaders({
  'Content-Type': 'application/json',
})
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class userService {

  private authenticated: boolean = false;
  constructor(private http: HttpClient) { }
 

 signupAdmin(data:any) {
    let host = environment.apiUrl;
    return this.http.post(host + '/signup/freelancer', data);
  }
  
 

  loginAdmin(data: any) {
    let host = environment.apiUrl;
    return this.http.post(host + '/login-admin', data)

  }
  
  
  getAllProvide():Observable<Provider[]>{
    let host=environment.apiUrl;
    return this.http.get<Provider[]>(host + '/all-provider')
  }


  approveProvider(id: number){
    let host = environment.apiUrl;
    return this.http.post(host + '/approve-account/', {id})
  }

  onSendResetLink(data: any): Observable<any> {
    let host = environment.apiUrl;
    return this.http.post(host + '/request-reset-password/', data)
  }

  resetPassword(userid: string, data: any): Observable<any> {
    let host = environment.apiUrl;
    return this.http.post(host + '/reset-password/' + userid, {
      "new_password": data.password,
      "new_password_repeat": data.passwordConfirm,
    })


  }


}