import { NotFoundComponent } from './shared/pages/not-found/not-found.component';
import { HomeComponent } from './features/home/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/login/login.component';

const routes: Routes = [
  { path: 'notfound', component: NotFoundComponent},
  { path: 'login', component: LoginComponent},
  { path: '',  component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
