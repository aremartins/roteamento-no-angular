import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  user: User = new User()

  constructor(private authService: AuthService, private router: Router) { }


  fazerLogin(){
    this.authService.login(this.user)
    console.log(this.user)
  }

}
