import { Component, EventEmitter, Input,Output, inject } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})

export class NewTaskComponent 
{
  @Input({required:true}) userId!:string;
  @Output() close = new EventEmitter<void>();

  private taskService = inject(TasksService);

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCloseAddTask()
  {
    this.close.emit();
  };
  onSubmit()
  {
    this.taskService.addTasks({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate:this.enteredDate 
    }, this.userId);
    this.close.emit();
  }
}
