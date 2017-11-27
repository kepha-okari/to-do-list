import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { PieListComponent } from './pie-list/pie-list.component';
import { TaskListComponent } from './task-list/task-list.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { NewTaskComponent } from './new-task/new-task.component';

@NgModule({
  declarations: [
    AppComponent,
    PieListComponent,
    TaskListComponent,
    EditTaskComponent,
    NewTaskComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
