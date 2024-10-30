import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TaskModel } from '../models/task.model';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
apiurl = "https://localhost:7214/api/"
  constructor(private httpclient:HttpClient ) { }
  loadtask(){
    return this.httpclient.get<TaskModel[]>(this.apiurl+"ToDo");
  }

  addTask(inserttasks: TaskModel): Observable<unknown> {
    return this.httpclient.post(this.apiurl+"ToDo/InsertToDo", inserttasks)
  }

  deleteTask(id: Number):Observable<unknown>{
    return this.httpclient.delete(this.apiurl+"ToDo/DeleteToDo?id="+id)
  }

  putTask(updatetasks: TaskModel):Observable<unknown>{
    return this.httpclient.put(this.apiurl+"ToDo/PutToDo", updatetasks)
  }
}
