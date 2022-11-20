import { HomeComponent } from './features/home/home/home.component';
import { CursosComponent } from './features/cursos/cursos/cursos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/login/login.component';

const routes: Routes = [
  { path: 'cursos', component: CursosComponent},
  { path: 'login', component: LoginComponent},
  { path: '',  component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
