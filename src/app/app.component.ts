import { Component } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  thing = "something that is not false";

  public masterTaskList: Task[] = [
    new Task("Create To-Do List app.", 0),
    new Task("Learn Angular services", 1),
    new Task("Learn how to use API in angular 5", 2),
    new Task("Write a blog about the new Samsung J7.", 3),
    new Task("Watch American Made", 4),
    new Task("add delete button to the to-up and Mea-tracker apps", 5)

  ];

  //for edititng the input
  selectedTask: Task = null;
  showDetails(clickedTask: Task) {
    this.selectedTask = clickedTask;
  }
  finishedEditing() {
    this.selectedTask = null;
  }
  show() {
    this.thing = "not null";
  }
  hide() {
    this.thing = null;
  }
  addTask(newTaskFromChild) {
    this.masterTaskList.push(newTaskFromChild);
  }

}
