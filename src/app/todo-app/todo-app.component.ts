import { Component } from '@angular/core';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent {

  lists:any[]=[];
 addTask(value:string){

   this.lists.push({id:this.lists.length,name:value})
   Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Task Added Successfully',
    showConfirmButton: false,
    timer: 1500
  })
  
 }
 remove(id:number){
    // this.lists=this.lists.filter(val=>val.id!==id);
      Swal.fire({
       
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
              this.lists.splice(id, 1);
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Task Deleted Successfully',
                showConfirmButton: false,
                timer: 1500
              })
        }
      })
 }


 editTask(id: number){
  let name = this.lists[id].name;
  let result = prompt("Edit Task Title", name);
  if (result !== null && result !== ""){
    this.lists[id].name = result;
  }
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Task Updated Successfully',
    showConfirmButton: false,
    timer: 1500
  })
}
  
}
