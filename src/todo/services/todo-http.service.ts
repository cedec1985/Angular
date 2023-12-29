import { Injectable } from '@angular/core';                

                                                                  // automatiquement, si on est en développement ou en production
                                                                  // est chargé soit le fichier environment.ts soit le fichier : environment.prod.ts
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoHttpService {

   urlApi: string ='https://jsonplaceholder.typicode.com'        // on récupère l'URL du fichier d'environnement (dev ou prod)

  constructor(private http: HttpClient) {                 // utiliser le package HTTP d'Angular
  }

  getTodos(): Observable<Todo[]> {                        // la fonction: getTodos() accepte en retour un observable ayant pour type de données : Todo[]

    return this.http.get<Todo[]>(`${this.urlApi}/todos`); // l'observable que l'on récupère du get doit contenir des données du type : Todo[]
  }

  getTodo(id: number): Observable<Todo> {                 // ici, c'est un simple : Todo

    return this.http.get<Todo>(`${this.urlApi}/todos/${id}`);
  }

  getTodosWithAny(): Observable<any> {                    // any est à éviter
                                                          // il faut toujours utiliser un typage
    return this.http.get(`${this.urlApi}/todos`);
  }
}