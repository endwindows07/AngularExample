import { bookModel } from 'src/app/models/bookModel';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  bookId?: number;
  public bookDetails?: bookModel;
  url: string = 'https://bowdotnetexample.azurewebsites.net'

  constructor(activeRoute: ActivatedRoute,
    public httpService: HttpServiceService,
    public router: Router,) {
    activeRoute.params.subscribe(it => {
      this.bookId = it.id;
      console.log(it.id)
    })

  }

  ngOnInit(): void {
    var res = this.httpService.get(this.url,'/api/Book/GetBookById', '?id='+this.bookId);
    res.then(value => {
      console.log(value);
      this.bookDetails = value.data as bookModel;
    })
  }

  onDelete(){
    if(confirm("Are you sure to delete "+ this.bookDetails?.name)) {
      var res = this.httpService.delete(this.url, '/api/Book/DeleteBook', '?id=' + this.bookId);
      res.then(value => {
        this.router.navigate(['/book'])
        console.log(value);
      })
    }
  }

  onEdit(){
    this.router.navigate(['/book/edit/' + this.bookId])
  }
}
