import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from 'app/haya/shared/services/jwt.service';
import { userService } from 'app/haya/shared/services/user.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})

export class SigninComponent implements OnInit {

  signInForm: FormGroup;
  showAlert: boolean = false;
  errorMessage = '';

  constructor(
      private userService: userService,
      private router:Router,
      private _formBuilder: FormBuilder,
      private tokenStorage: TokenStorageService,){}

  ngOnInit(): void {
    this.signInForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      }
     );
  }




  onSignIn(): void {
      this.userService.loginAdmin(this.signInForm.value)
      .subscribe(data => {
           console.log(data);
           this.tokenStorage.saveUser(data);
            this.router.navigateByUrl("/example")
          
        },
        error => {
          this.errorMessage = error;
      });
    
  }
}




