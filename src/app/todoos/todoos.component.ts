import { Component } from '@angular/core';

@Component({
  selector: 'app-todoos',
  templateUrl: './todoos.component.html',
  styleUrls: ['./todoos.component.css']
})
export class TodoosComponent {

  ischecked:boolean=false;
  todolist:string[]=[];
  todo:string="";
  arr:string[]=[];

  addtolist(){
      this.todolist.push(this.todo)
  }

  removefromlist(id:number){
    this.todolist.splice(id,1)
  }
removefromcheckedlist(id:number){

  this.arr.splice(id,1)
}
checked(data:string,id:number)
{
  this.todolist.splice(id,1)
this.arr.push(data)
this.ischecked=true;
console.log(this.arr)
}}
