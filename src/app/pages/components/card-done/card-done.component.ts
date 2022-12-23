import { Component, OnInit } from '@angular/core';
import { DONE, IArchanlo, PLAN, TODO } from 'src/app/interfaces/i-archanlo';
import { ArchanloService } from 'src/app/services/archanlo.service';
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-card-done',
  templateUrl: './card-done.component.html',
  styleUrls: ['./card-done.component.css'],
})
export class CardDoneComponent implements OnInit {
  tasks: IArchanlo[] = [];
  statusTodo: string = TODO;
  statusPlan: string = PLAN;
  updatedList: boolean[] = [];
  isDelete: boolean = false;
  taskDelete: IArchanlo = {} as IArchanlo;
  taskNew: IArchanlo = {} as IArchanlo;
  newTask: boolean = false;

  constructor(
    private archanloService: ArchanloService,
    private toastService: ToasterService
  ) {}
  ngOnInit(): void {
    this.onAll();
  }

  onAll() {
    this.archanloService.all(DONE).subscribe((data: any) => {
      this.tasks = data.map((e: any) => {
        return {
          id: e.payload.doc.id,
          title: e.payload.doc.data()['title'],
          description: e.payload.doc.data()['description'],
          status: e.payload.doc.data()['status'],
        };
      });
    });
  }
  onUpdate(id: string, task: IArchanlo) {
    this.archanloService.updatePlan(id, task);
    this.toastService.showToast = true;
    this.toastService.message = `Berhasil mengupdate data ${task.title}`;
  }
  onDelete(id: string) {
    this.archanloService.delete(id);
    this.toastService.showToast = true;
    this.toastService.message = `Berhasil menghapus data`;
    this.taskDelete = {} as IArchanlo;
    this.isDelete = false;
  }
  confirmDelete(task: IArchanlo) {
    this.taskDelete = task;
    this.isDelete = true;
  }
}
