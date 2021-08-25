import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { Component, OnInit } from '@angular/core';
import { bookModel } from 'src/app/models/bookModel';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  imageFile?: File;
  public imageUrl?: string;
  url: string = 'https://bowdotnetexample.azurewebsites.net'
  bookData?: bookModel ;
  bookId:number = 0;


  public bookForm?: FormGroup;

  constructor(public httpService: HttpServiceService, public router: Router, activeRoute:ActivatedRoute) {

    // this.bookData = this.bookForm.value;
    activeRoute.params.subscribe(it => {
      this.bookId = it.id;
      console.log(it.id)
    })
   }


  ngOnInit(): void {
    var res = this.httpService.get(this.url,'/api/Book/GetBookById', '?id='+this.bookId);
    res.then(value => {
      console.log(value);
      this.bookData = value.data as bookModel;

      this.imageUrl = this.bookData.imageUrl;

    this.bookForm = new FormGroup({
      id: new FormControl(this.bookData.id),
      name: new FormControl(this.bookData.name  , [Validators.required, Validators.minLength(5)]),
      description: new FormControl(this.bookData.description),
      imageUrl: new FormControl(this.bookData.imageUrl),
      author: new FormControl(this.bookData.author, [Validators.required]),
      price: new FormControl(this.bookData.price, Validators.required),
      discount: new FormControl(this.bookData.discount),
      count: new FormControl(this.bookData.count, Validators.required),
      inStock: new FormControl(this.bookData.inStock, Validators.required),
      saleCount: new FormControl(this.bookData.saleCount,),
      isActive: new FormControl(this.bookData.isActive,),
    });
    })
  }

  get f(){
    if( this.bookForm  == null) return;
    return this.bookForm.controls;
  }

  onCancel() {
    if (confirm('Are you sure to want leave this page.'))
      this.router.navigate(['/book'])
  }

  onChange(event: any) {
    this.imageFile = event.target.files[0];

    if (this.imageFile == null) return;

    // Create form data
    const formData = new FormData();

    // Store form name as "file" with file data
    formData.append("file", this.imageFile, this.imageFile.name);

    var res = this.httpService.post(this.url, '/api/Book/UploadImage', '', formData)
    res.then(value => {
      this.imageUrl = value.data.imgUrl
      console.log(value);
    })
    console.log()
  }


  onSubmit() {
    console.log('pass')
    if( this.bookForm  == null) return;
    if (this.bookForm.valid) {

      this.bookData = this.bookForm.value;
      if(this.imageUrl == null) return

      if( this.bookData  == null) return;
      this.bookData.imageUrl = this.imageUrl;
      var res = this.httpService.post(this.url, '/api/Book/AddBook', '', this.bookData)
      res.then(value => {
        console.log(value)
        this.router.navigate(['/book'])
      })
    }else{
      console.log(this.bookForm.errors)
    }
  }
}
