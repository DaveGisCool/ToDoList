import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {
  todos:Todo[]; //calls ToDo model

  selectedItem: Todo;
  
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
        complete: true
      },
      {
        id:3,
        action: 'Remember to look at list',
        complete: false
      }
    ]
  }

  onClick(todo: Todo): void {
    this.selectedItem = todo;
  }

  removeTodo(todo:Todo) {
    //return all items without this items id
    this.todos = this.todos.filter(index => index.action !== todo.action); 
  }

  addTodo(todo:Todo) {
    // adds a new incomplete item to Todo List
    this.todos.push(todo);
  }
}
