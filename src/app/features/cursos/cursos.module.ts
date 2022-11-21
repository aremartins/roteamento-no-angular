import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CursosRoutes } from './cursos.routing';
import { CursosComponent } from './cursos/cursos.component';



@NgModule({
  declarations: [CursosComponent, CourseDetailComponent],
  imports: [
    CommonModule,
    CursosRoutes
  ]
})
export class CursosModule { }
