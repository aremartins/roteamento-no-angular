import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  showMenu : boolean = false

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.showMenuEmitter.subscribe( show => this.showMenu = show)
  }
}
