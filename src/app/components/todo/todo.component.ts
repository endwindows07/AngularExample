import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { resaltModel } from 'src/app/models/resultModel';
import { TodoModel } from 'src/app/models/todoModel';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public url:string = 'https://bowdotnetexample.azurewebsites.net';
  public todos: TodoModel[] = [];
  public countRestoFTask: number = 0;

  constructor(public http:HttpClient )
  {
  }

  ngOnInit(): void {
    this.GetTodo()
  }


  GetTodo(): void {
    var res = this.http.get(this.url + '/api/Todo/GetTodoList').toPromise() as Promise<resaltModel>;
    res.then(value =>  {
      this.todos = value.data;
      console.log(value);
      var theRestOfTask = this.todos.filter(it => it.completed == false)
      this.countRestoFTask = theRestOfTask.length
    })
  }

  onAddTodo(todoInput: any){
    var _todos = { title: todoInput.value }
    var res = this.http.post(this.url + '/api/Todo/AddTodo', _todos).toPromise() as Promise<resaltModel>;
    res.then(value =>  {
      console.log(value);
      todoInput.value = '';
      this.GetTodo()

    })
  }

  onUpdateStatus(todo: any){
    console.log(todo)

    var res = this.http.put(this.url + '/api/Todo/UpdateTodoStatus', todo).toPromise() as Promise<resaltModel>;
    res.then(value =>  {
      console.log(value);
      var theRestOfTask = this.todos.filter(it => it.completed == false)
      this.countRestoFTask = theRestOfTask.length
    })
  }

  onRemove(todo: any){
    console.log(todo)
    this.todos.splice(this.todos.indexOf(todo), 1)

    var res = this.http.delete(this.url + '/api/Todo/DeleteTodoById?id=${todo.id}').toPromise() as Promise<resaltModel>;
    res.then(value =>  {
      console.log(value);
      var theRestOfTask = this.todos.filter(it => it.completed == false)
      this.countRestoFTask = theRestOfTask.length
    })
  }
}
