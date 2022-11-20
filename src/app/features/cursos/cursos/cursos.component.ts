import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../models/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
})
export class CursosComponent implements OnInit {
  courses: Course[] = [];

  constructor(private coursesService: CoursesService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(): void {
    this.courses = this.coursesService.getCourses()
  }

}
