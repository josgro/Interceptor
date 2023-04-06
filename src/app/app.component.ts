import { Component } from '@angular/core';
import { Todo } from './models/todo';
import { ApiService } from './http/api.service';
import { UserService } from './core/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  todo: Todo = {
    userId: 0,
    id: 0,
    title: '',
    completed: false
  }

  constructor(private api: ApiService, private userService: UserService) { }

  getTodo() {
    this.api.getTodo(2).subscribe(
      data => (this.todo = data)
    );
  }

  setToken() {
    this.userService.setToken();
  }

  removeToken() {
    this.userService.removeToken();
  }

}
