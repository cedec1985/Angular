import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TodoHttpService } from './services/todo-http.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule                        // on a besoin du package Http pour effectuer nos requêtes à l'API
  ],
  exports: [],            // on exporte le composant afin que depuis un autre module on puisse l'importer et l'utiliser
  providers: [TodoHttpService],
})
export class TodoModule { }