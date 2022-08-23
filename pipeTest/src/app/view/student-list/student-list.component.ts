import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student';
import { StudentsService } from 'src/app/services/students.service';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  list: Array<Student> = [];
  constructor(service: StudentsService) { 
    this.list = service.getAll();
  }

  ngOnInit(): void {
  }

}
