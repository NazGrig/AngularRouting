import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ToDolistComponent } from './to-dolist/to-dolist.component';
import { Route, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserCardComponent } from './user/user-card/user-card.component';
import { TodoCardComponent } from './to-dolist/todo-card/todo-card.component';

const routes: Route[] = [
  
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'to-dolist',
    component: ToDolistComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    ToDolistComponent,
    HeaderComponent,
    UserCardComponent,
    TodoCardComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
