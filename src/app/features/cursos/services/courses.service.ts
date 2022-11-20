import { COURSES } from './../mocks/courses.mock';
import { Injectable } from '@angular/core';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly api: Course[] = COURSES;

  getCourses() {
    return this.api;
  }

  getCourseById(id: number){
    return this.api.find((course) => course.id === id)
  }
}
