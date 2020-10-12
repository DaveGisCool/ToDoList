import { splitClasses } from '@angular/compiler';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-action-item',
  templateUrl: './action-item.component.html',
  styleUrls: ['./action-item.component.css']
})
export class ActionItemComponent implements OnInit {
  @Input() todo: Todo; //Gives input type todo a type of Todo
  @Output() removeTodo: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.complete //cross out complete actions
    }
    return classes;
  }

  onSelect(todo) {
    todo.complete = !todo.complete // strikes through selected items
  }

  onRemove(todo) {
    this.removeTodo.emit(todo); // removes 
  }

  
}
