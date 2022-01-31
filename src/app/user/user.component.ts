import { Component, OnInit } from '@angular/core';
import { MyList } from '../models/my-list.model';
import { Todo } from '../models/todo.model';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  user = new MyList<User>([
    {
      id: 1,
      name: 'User1',
      todoList: new MyList<Todo>([
          {id: 1, title: 'todo1'}, 
          {id: 2, title: 'todo2'},
      ]),
      
  },
  {
    id: 2,
    name: 'User2',
    todoList: new MyList<Todo>([
        {id: 3, title: 'todo3'}, 
        {id: 4, title: 'todo4'},
    ]),  
  },
  {
    id: 3,
    name: 'User3',
    todoList: new MyList<Todo>([]), 
  },
  {
    id: 4,
    name: 'User4',
    todoList: new MyList<Todo>([
        {id: 5, title: 'todo5'}, 
        {id: 6, title: 'todo6'},
        {id: 7, title: 'todo7'},
    ]),
  }
  ])

  ngOnInit(): void {
  }

}
