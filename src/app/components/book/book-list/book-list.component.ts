import { Component, OnInit } from '@angular/core';
import { bookModel } from 'src/app/models/bookModel';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  url: string = 'https://bowdotnetexample.azurewebsites.net'
  books?: bookModel[];

  constructor(public httpService: HttpServiceService) {

    var res = this.httpService.get(this.url, '/api/Book/GetBookList');
    res.then(value => {
      this.books = value.data;
      console.log(value)
    })
  }
  public changeText = false;

  ngOnInit(): void {
  }

  onViewDetail(book: any) {
    console.log(book);
  }
}
