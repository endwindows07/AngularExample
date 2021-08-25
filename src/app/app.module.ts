import { HttpServiceService } from './services/http-service.service';
import { NgModule} from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TodoComponent } from './components/todo/todo.component';
import { TestComponent } from './components/test/test.component';
import { Test2Component } from './components/test2/test2.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Test3Component } from './components/test3/test3.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { BookListComponent } from './components/Book/book-list/book-list.component';
import { BookDetailsComponent } from './components/Book/book-details/book-details.component';
import { AddBookComponent } from './components/book/add-book/add-book.component';
import { EditBookComponent } from './components/book/edit-book/edit-book.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TestComponent,
    Test2Component,
    Test3Component,
    NavbarComponent,
    BookListComponent,
    BookDetailsComponent,
    AddBookComponent,
    EditBookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [HttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
