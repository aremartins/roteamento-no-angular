import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Course } from '../models/course';
import { CoursesService } from './../services/courses.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss'],
})
export class CourseDetailComponent implements OnInit {
  id!: number;
  course?: Course;

  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.getCourseById();
  }

  getCourseById(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.coursesService
      .getCourseById(this.id)
      .subscribe(course => this.course = course);

    if (this.course == null) {
      this.router.navigate(['/notfound']);
    }
  }
}
