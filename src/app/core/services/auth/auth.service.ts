import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User = new User()

  showMenuEmitter = new EventEmitter<boolean>()

  userAuth: boolean = false

  constructor(private router: Router) { }


  login(user: User): void{
    if(user.usuario === 'admin'.toLocaleLowerCase().trim() && Number(user.senha) === 123456){
      this.user = user
      this.userAuth = true
      this.showMenuEmitter.emit(true)
      this.router.navigate(['/'])
    } else {
      this.userAuth = false
      alert('Usuário ou senha inválidos')
      this.showMenuEmitter.emit(false)
      this.router.navigate(['/login'])
    }
  }

  usuarioAutenticado(): boolean {
    return this.userAuth
  }
}
