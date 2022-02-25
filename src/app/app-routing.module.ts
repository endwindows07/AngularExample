import { EditBookComponent } from './components/book/edit-book/edit-book.component';
import { TodoComponent } from './components/todo/todo.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { BookListComponent } from './components/book/book-list/book-list.component';
// import { BookDetailsComponent } from './components/book/book-details/book-details.component';
import { AddBookComponent } from './components/book/add-book/add-book.component';
import { ListComponent } from './components/book/list/list.component';
import { DetailsComponent } from './components/book/details/details.component';

const routes: Routes = [
  { path:'', redirectTo: 'todo', pathMatch: 'full'},
  { path:'todo', component: TodoComponent },
  { path:'book', component: ListComponent },
  { path:'book/:id', component: DetailsComponent },
  { path:'book/edit/:id', component: EditBookComponent },
  { path:'addBook', component: AddBookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
