import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoDisplayComponent } from './todo-display/todo-display.component';
import { TodoComponent } from './todo.component';


const routes: Routes = [
  {path: 'todo', component: TodoComponent, children: [
    {path: 'todo-display', component: TodoDisplayComponent},

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
