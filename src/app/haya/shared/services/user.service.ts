import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Provider } from "app/haya/pages/admin/users/provider.model";
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
    return this.http.post(host + '/users/signup/freelancer', data);
  }
  
 

  loginAdmin(data: any) {
    let host = environment.apiUrl;
    return this.http.post(host+'/users/login-admin', data)

  }
  
  
  getAllProvide():Observable<Provider[]>{
    let host=environment.apiUrl;
    return this.http.get<Provider[]>(host + '/users/all-provider')
  }


  approveProvider(id: number){
    let host = environment.apiUrl;
    return this.http.post(host + '/users/approve-account/', {id})
  }

  onSendResetLink(data: any): Observable<any> {
    let host = environment.apiUrl;
    return this.http.post(host + '/users/request-reset-password/', data)
  }

  resetPassword(userid: string, data: any): Observable<any> {
    let host = environment.apiUrl;
    return this.http.post(host + '/users/reset-password/' + userid, {
      "new_password": data.password,
      "new_password_repeat": data.passwordConfirm,
    })


  }


}