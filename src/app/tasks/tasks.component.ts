import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgFor } from '@angular/common';
import { TaskComponent } from "./task/task.component";
import {dummyTasks} from "./dummy-tasks";
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTask } from './task/task.model';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent,NgFor, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) userId!:string;
  @Input({required:true}) name!:string;
  tasks = dummyTasks;
  isAddingtask = false;
  get selectedUserTasks(){
    return this.tasks.filter((task)=> this.userId === task.userId);
  }
  onComplete(id:string){
    this.tasks = this.tasks.filter((task)=> task.id !== id);
  }
  onClose(){
    this.isAddingtask = false;
  }
  onStartAddTask(){
    this.isAddingtask = true;
  }
  onAddtask(task: NewTask){
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: task.title,
      summary:task.summary,
      dueDate: task.dueDate
    })
    this.isAddingtask = false;
  }
}
