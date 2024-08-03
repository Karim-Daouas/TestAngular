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
  @Input() name?:string;
  tasks = dummyTasks;
}
