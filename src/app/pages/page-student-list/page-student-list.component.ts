import { Component, OnInit } from '@angular/core';
import { IStudent } from 'src/app/interfaces/i-student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-page-student-list',
  templateUrl: './page-student-list.component.html',
  styleUrls: ['./page-student-list.component.css'],
})
export class PageStudentListComponent implements OnInit {
  student: IStudent = {} as IStudent;
  students: Array<IStudent> = [];

  constructor(private studentService: StudentService) {}
  ngOnInit(): void {
    this.getAllStudent();
  }
  getAllStudent() {
    this.studentService.all().subscribe((data: any) => {
      this.students = data.map((e: any) => {
        return {
          id: e.payload.doc.id,
          firstName: e.payload.doc.data()['firstName'],
          lastName: e.payload.doc.data()['lastName'],
          age: e.payload.doc.data()['age'],
        } as IStudent;
      });
    });
  }
  showDetail(student: IStudent) {
    this.student = student;
  }
  delete(id: string) {
    this.studentService.delete(id);
  }
  edit(id: string, student: IStudent) {
    this.studentService.update(id, student);
  }
}
