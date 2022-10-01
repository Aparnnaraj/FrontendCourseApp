import { Component, OnInit } from '@angular/core';
import { CourseserviceService } from '../courseservice.service';


@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {
  course={
         title:"",
         description:"",
         venue:"",
         duration:"",
         date:""
  }

  constructor(private courseservice:CourseserviceService) { }

  ngOnInit(): void {
  }
  addcourse_f(){
    console.log(this.course);
    this.courseservice.addcourse(this.course)
    .subscribe((res)=>{
      alert('Course successfully added')
    })
  }
  }


