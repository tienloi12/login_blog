import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, User } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged = false;

  constructor(private auth : Auth) { }

  currentUser! : User | null;

async loginWithGoogle(){
  let provider = new GoogleAuthProvider();
  return await signInWithPopup(this.auth,provider);
}
logout()
{
  this.auth.signOut();
}


}
