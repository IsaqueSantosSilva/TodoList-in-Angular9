import { Component, ɵisBoundToModule__POST_R3__ } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public todos: Todo[] = [];
  public title: String = "Minhas Tarefas";
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(40),
        Validators.required
      ])]
    });
    this.todos.push(new Todo (1, "Passear com o cachorro" , false));
    this.todos.push(new Todo (2, "Levar o lixo para fora" , false));
    this.todos.push(new Todo (3, "Limpar o quarto"        , false));
  }

  remove(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }

  done(todo: Todo) {
    todo.done = true
  }

  undone(todo: Todo) {
    todo.done = false
  }

  add() {
    const title = this.form.controls['title'].value;
    const id = this.todos.length + 1;
    this.todos.push(new Todo(id, title, false));
    this.clear();
  }

  clear() {
    this.form.reset();
  }

}

