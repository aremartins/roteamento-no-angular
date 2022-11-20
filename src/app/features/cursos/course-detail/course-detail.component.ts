import { CoursesService } from './../services/courses.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {
id!: number
course!: Course


  constructor(private route: ActivatedRoute, private coursesService:CoursesService, private router: Router) {
    console.log(route)
   }

  ngOnInit(): void {
   this.getCourseById()
  }

  getCourseById(){
    this.id = Number(this.route.snapshot.paramMap.get('id'))
    this.course = this.coursesService.getCourseById(this.id) as Course
    console.log(this.course)
    if(this.course == null){
      this.router.navigate(['/notfound'])
    }
  }

}
