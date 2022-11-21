import { COURSES } from './../mocks/courses.mock';
import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly api = of(COURSES);

  getCourses(): Observable<Course[]> {
    return this.api;
  }

  getCourseById(id: number): Observable<Course | undefined> {
    return this.api.pipe(
      map((courses) => courses.find((course) => course.id === id))
    );
  }
}
