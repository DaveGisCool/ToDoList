import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-filter-to-dos',
  templateUrl: './filter-to-dos.component.html',
  styleUrls: ['./filter-to-dos.component.css']
})
export class FilterToDosComponent implements OnInit {
  @Output() filterTodos : EventEmitter<any> = new EventEmitter();
  
  action: string;
  
  @Input() todo: Todo;

  constructor() { }

  ngOnInit(): void {
  }

}
