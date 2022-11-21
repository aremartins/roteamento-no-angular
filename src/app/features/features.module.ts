import { CursosModule } from './cursos/cursos.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';
import { AlunosModule } from './alunos/alunos.module';

@NgModule({
  declarations: [HomeComponent, LoginComponent, NavbarComponent, MainComponent],
  imports: [CommonModule, RouterModule, SharedModule, CursosModule, AlunosModule],
  exports: [MainComponent],
})
export class FeaturesModule {}
