import { Component,Input, inject } from '@angular/core';
import { Task } from './task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required:true}) task!:Task;

  private taskService = inject(TasksService);

  onCompleteTask(){
    this.taskService.removeTasks(this.task.id);
  }
}
