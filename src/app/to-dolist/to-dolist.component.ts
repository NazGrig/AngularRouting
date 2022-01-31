import { Component, OnInit } from '@angular/core';
import { MyList } from '../models/my-list.model';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-to-dolist',
  templateUrl: './to-dolist.component.html',
  styleUrls: ['./to-dolist.component.css']
})
export class ToDolistComponent {

  list = new MyList<Todo>([ 
    {id: 1, title: 'todo1'}, 
    {id: 2, title: 'todo3'},
    {id: 4, title: 'todo4'}, 
    {id: 5, title: 'todo5'},
    {id: 6, title: 'todo6'}, 
    {id: 7, title: 'todo7'},
    {id: 8, title: 'todo8'}, 
    {id: 9, title: 'todo9'},
  ]);

}
