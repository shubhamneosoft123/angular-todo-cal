import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { SimpleComponent } from './simple/simple.component';
import { TodoAppComponent } from './todo-app/todo-app.component';

const routes: Routes = [
  {path:"",component:CalculatorComponent},
  {path:"simple",component:SimpleComponent},
  {path:"todo",component:TodoAppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
