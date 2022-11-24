import { NotFoundComponent } from './shared/pages/not-found/not-found.component';
import { HomeComponent } from './features/home/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/login/login.component';

const routes: Routes = [
  { path: 'cursos', loadChildren:() => import('./features/cursos/cursos.module').then(m => m.CursosModule) },
  { path: 'alunos', loadChildren:() => import('./features/alunos/alunos.module').then(m => m.AlunosModule) },
  { path: 'notfound', component: NotFoundComponent},
  { path: '',  component: HomeComponent},
  { path: 'login', component: LoginComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
