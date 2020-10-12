import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {
  todos:Todo[]; //calls ToDo model

  constructor() { }

  ngOnInit(): void {
    this.todos = [ //creates array of ToDos and adds samples
      {
        id: 1,
        action: 'Add items to list',
        complete: false
      },
      {
        id: 2,
        action: 'Complete something on list',
        complete: false
      },
      {
        id:3,
        action: 'Remember to look at list',
        complete: false
      }
    ]
  }

  removeTodo(todo:Todo) {
    //return all items without this items id
    this.todos = this.todos.filter(index => index.id !== todo.id); 
  }

  addTodo(todo:Todo) {
    // adds a new incomplete item to Todo List
    this.todos.push(todo);
  }
}
