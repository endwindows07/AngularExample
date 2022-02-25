import { Component, OnInit } from '@angular/core';
import { bookModel } from 'src/app/models/bookModel';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

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
