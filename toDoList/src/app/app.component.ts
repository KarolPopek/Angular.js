import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newToDoTitle: string = '';
  todos: Array<Todo> = [
    {
      title: 'zakupy',
      complete: true
    },
    {
      title: 'kino',
      complete: false
    }
    ];

  addToList()
  {
    if(!this.newToDoTitle) {
      return;
    }
    const newTodo: Todo = {
      title: this.newToDoTitle,
      complete: false
    };
    this.todos.push(newTodo);
    this.newToDoTitle = '';
  }

  deleteFromList(index) {
    this.todos.splice(index, 1);
  }

}

interface Todo {
  title: string;
  complete: boolean;
}
