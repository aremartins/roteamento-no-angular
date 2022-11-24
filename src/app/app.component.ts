import { Component } from '@angular/core';
import { AuthService } from './core/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rotas';
  showMenu : boolean = false

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.showMenuEmitter.subscribe( show => this.showMenu = show)
  }
}
