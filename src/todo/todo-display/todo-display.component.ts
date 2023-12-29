import { Component, OnDestroy, OnInit } from '@angular/core';                    
import { Observable, Subscription,  } from 'rxjs';
import { map } from 'rxjs/operators';
import { TodoHttpService } from '../services/todo-http.service';
import { Todo } from '../models/todo';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-display',
  templateUrl: './todo-display.component.html',
  styleUrls: ['./todo-display.component.scss'],
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  standalone: true
})
export class TodoDisplayComponent implements OnInit, OnDestroy {

  //  un todo par son id
  todo1$!: Observable<Todo>;               // A1 : la donnée de l'observable doit être de type: Todo
  todo2!: Todo;                            // A2 : la variable doit être du type: Todo
  subTodo2!: Subscription;                 // A2 : pour le désabonnement

  // les todos appartenant à un utilisateur
  todosByUser$!: Observable<Todo[]>;       // B1 : doit être un observable dont les données doivent être un tableau de type Todo[]
  todosByUser!: Todo[];                    // B2 : la variable doit être un tableau de type Todo[]
  subTodosByUser!: Subscription;           // B2 : pour le désabonnement

  // tous les todos (de tous les utilisateurs)
  todosWithAny$!: Observable<any>;         // C1 : à éviter avec 'any'. Il faut utiliser le typage avec des modèles
  todos$!: Observable<Todo[]>;             // D1
  todos!: Todo[];                          // D2
  subTodos!: Subscription;                 // D2 : pour le désabonnement

  constructor(private todoHttpService: TodoHttpService) { }

  ngOnInit(): void {                      // c'est dans ngOnInit qu'on initialise les données

    // -----------------------------------------------------
    // un todo par son id
    const userId1 =5;

    // A1 : retourne un observable
    this.todo1$ = this.todoHttpService.getTodo(userId1);    // A1
                                                            // todo1$ est passé à la vue sous forme d'observable
                                                            // c'est la vue qui va souscrire à l'observable via le pipe async
    // A2 : retourne les données brut
    this.subTodo2 = this.todoHttpService.getTodo(userId1).subscribe((todo: Todo) => {   // A2
      this.todo2 = todo;                                                                // todo2 est passé à la vue sous forme de données brutes
    });

    // -------------------------------------------------------------------------
    // les todos appartenant à un utilisateur
    // cas d'utilisation : si l'API envoi qu'une liste de todos et qu'on ne puisse pas récupérer un todo par l'id
    const userId2 = 5;

    // B1 : retourne un observable
    this.todosByUser$ = this.todoHttpService.getTodos().pipe(     // B1
      map((todos: Todo[]) =>                                      // récupère les todos[]
        todos.filter((todo: Todo) => todo.userId === userId2)     // pour chaque élément : todo on filtre avec la condition: todo.userId === 6
      ));                                                         // retourne un observable (contenant les données qui ont été filtrées)

    // B2 : retourne les données brutes
    this.subTodosByUser = this.todoHttpService.getTodos().pipe(   // B2
      map((todos: Todo[]) =>
        todos.filter((todo: Todo) => todo.userId === userId2)
      )
    ).subscribe((todos: Todo[]) => this.todosByUser = todos );    // retourne des données brutes

    // ----------------------------------------------------------------------------
    // tous les todos (de tous les utilisateurs)

    // C1 : retourne un observable
    this.todosWithAny$ = this.todoHttpService.getTodosWithAny();  // C1

    // D1 : retourne un observable
    this.todos$ = this.todoHttpService.getTodos();                // D1

    // D2 : retourne les données brutes
    this.subTodos = this.todoHttpService.getTodos().subscribe((todos: Todo[]) => {  // D2
      this.todos = todos;
    });
  }

  ngOnDestroy(): void {                           // il faut toujours se désabonner aux observables que l'ont a souscrits manuellement
    this.subTodo2.unsubscribe();                  // A2
    this.subTodosByUser.unsubscribe();            // B2
    this.subTodos.unsubscribe();                  // D2
  }
}