import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos/cursos/cursos.component';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [
    CursosComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    MainComponent
  ]
})
export class FeaturesModule { }
