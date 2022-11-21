import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Course } from '../models/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
})
export class CursosComponent implements OnInit {
  courses!: Observable<Course[]>;

  constructor(
    private coursesService: CoursesService,
  ) {}

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(): void {
    this.courses = this.coursesService.getCourses();
  }
}
