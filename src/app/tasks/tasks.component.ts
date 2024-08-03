import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgFor } from '@angular/common';
import { TaskComponent } from "./task/task.component";
import {dummyTasks} from "./dummy-tasks";


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent,NgFor],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) userId!:string;
  @Input({required:true}) name!:string;
  tasks = dummyTasks;

  get selectedUserTasks(){
    return this.tasks.filter((task)=> this.userId === task.userId);
  }
}
