import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  thing = "something that is not false";

  public tasks: Task[] = [
       new Task("Create To-Do List app.", 0),
       new Task("Learn Angular services", 1),
       new Task("Learn how to use API in angular", 2),
       new Task("Do the laundry.", 3),
       new Task("Watch American Made", 4),
       new Task("Visit Grandma",5)
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

}


export class Task {
  public done: boolean = false;
  constructor(public description: string, public id: number) {   }
}
