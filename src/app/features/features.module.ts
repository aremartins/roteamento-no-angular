import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos/cursos/cursos.component';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { CourseDetailComponent } from './cursos/course-detail/course-detail.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CursosComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    MainComponent,
    CourseDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports:[
    MainComponent
  ]
})
export class FeaturesModule { }
