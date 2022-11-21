import { Routes, RouterModule } from '@angular/router';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CursosComponent } from './cursos/cursos.component';

const routes: Routes = [
  { path: 'cursos', component: CursosComponent},
  { path: 'curso/:id', component: CourseDetailComponent },
];

export const CursosRoutes = RouterModule.forChild(routes);
