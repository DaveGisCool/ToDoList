import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  @Output() addTodo : EventEmitter<any> = new EventEmitter();
  
  action: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() { // add incomplete item to ToDo list
    const todo = {
      action: this. action,
      completed: false
    }

    this.addTodo.emit(todo);
  }
}
