import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgFor } from '@angular/common';
import { TasksService } from './tasks.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) userId!:string;
  @Input({required:true}) name!:string;
  
  constructor(private tasksService: TasksService){};

  isAddingtask = false;

  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.userId);
  }
  onClose(){
    this.isAddingtask = false;
  }
  onStartAddTask(){
    this.isAddingtask = true;
  }
}
