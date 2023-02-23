import { Component, OnInit } from '@angular/core';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    constructor(private auth : Auth,private authService : AuthService){}
   login()
   {
    this.authService.loginWithGoogle();
   }
   logout()
   {
    this.authService.logout();
   }
   ngOnInit() {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.authService.currentUser = user;
      } else {
        console.log('No user');
        this.authService.currentUser = null;
      }
    }
    )
  }
  callback() {

  }
}

