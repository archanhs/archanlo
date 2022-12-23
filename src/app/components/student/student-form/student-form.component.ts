import { Component, Input } from '@angular/core';
import { IStudent } from 'src/app/interfaces/i-student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css'],
})
export class StudentFormComponent {
  @Input() student: IStudent = {} as IStudent;
  showMore: boolean = false;
  showToast: boolean = false;
  isConfirmDelete: boolean = false;

  constructor(private studentService: StudentService) {}
  ngOnInit(): void {}

  async onCreateStudent() {
    try {
      await this.studentService.create(this.student);
    } catch (err: any) {
      console.log(err);
    }
  }
  update() {}
  delete() {}
  cancel() {
    this.student = {} as IStudent;
  }
}
