import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../../services/todo.service';
import { TaskModel } from '../../../models/task.model';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TableModule,DialogModule,ButtonModule,InputTextModule,FormsModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  providers: [TodoService]
})
export class TasksComponent implements OnInit{
  visible: boolean = false;
  visible1: boolean = false;
  visible2: boolean = false;
  tasks:TaskModel[]=[];
  title:string="";
  description:string="";
  constructor (private todoservice:TodoService){ }
  ngOnInit(): void {
    this.loadtask();
  }
  showDialog() {
    this.visible = true;
}
showDialog2(id:number) {
  this.visible1 = true;
}
showDialog3() {
  this.visible2 = true;
}
  savetask(){
    const task:TaskModel={
      title:this.title,
      description:this.description
        }
        this.todoservice.addTask(task).subscribe(res=>{
          console.log("sucsess")
          this.visible=false;
          this.loadtask();
        })
  }
  removetask(id:number){
    this.todoservice.deleteTask(id).subscribe(res=>{
      console.log("sucsess")
      this.visible1=false;
      this.loadtask();
    })

  }
  updatetask(){
    const task:TaskModel={
    title:this.title,
    description:this.description
      }
    this.todoservice.putTask(task).subscribe(res=>{
      console.log("sucsess")
      this.visible2=false;
      this.loadtask();
    })

  }

  loadtask(){
    this.todoservice.loadtask().subscribe(res=>{
      this.tasks=res
    })
  }
}

