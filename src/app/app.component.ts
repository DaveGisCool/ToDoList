import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) //Decorator

export class AppComponent {
  title: string = 'ToDoList';

  //Constructors run when component is initialized
  constructor(){
  }

  

}
