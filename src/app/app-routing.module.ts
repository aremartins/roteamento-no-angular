import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/guards/auth-guard.service';
import { LoginComponent } from './core/login/login.component';
import { HomeComponent } from './features/home/home/home.component';
import { NotFoundComponent } from './shared/pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'cursos',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./features/cursos/cursos.module').then((m) => m.CursosModule),
  },
  {
    path: 'alunos',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./features/alunos/alunos.module').then((m) => m.AlunosModule),
  },
  { path: 'notfound', component: NotFoundComponent, canActivate: [AuthGuard] },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
