import { Component, ɵisBoundToModule__POST_R3__ } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: any[] = [];
  public title: String = "Minhas Tarefas";
  // public toDo: = String document.getElementById('todoID');

  constructor() {
    this.todos.push('passear com o cachorro');
  }
  alterarTexto() {
    this.todos = []
  }
  removerTodo() {
    this.todos.push("aaa");
  }

  adicionarTodo() {
    this.todos.push("aaa");
  }
}

