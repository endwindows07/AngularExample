import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { Component, OnInit } from '@angular/core';
import { bookModel } from 'src/app/models/bookModel';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  imageFile?: File;
  public imageUrl?: string;
  url: string = 'https://bowdotnetexample.azurewebsites.net'
  bookData: bookModel ;

  public bookForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    description: new FormControl(''),
    imageUrl: new FormControl(''),
    author: new FormControl('', [Validators.required]),
    price: new FormControl('', Validators.required),
    discount: new FormControl('',),
    count: new FormControl('', Validators.required),
    inStock: new FormControl('', Validators.required),
    saleCount: new FormControl(0,),
    isActive: new FormControl(true,),
  });

  constructor(public httpService: HttpServiceService, public router: Router) {
    this.bookData = this.bookForm.value;
   }


  ngOnInit(): void {
  }

  get f(){
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

    console.log(this.imageFile.name)
    var res = this.httpService.post(this.url, '/api/Book/UploadImage', '', formData)
    res.then(value => {
      this.imageUrl = value.data.imgUrl
      console.log(value);
    })
    console.log()
  }


  public onSubmit() {
    if (this.bookForm.valid) {

      this.bookData = this.bookForm.value;
      if(this.imageUrl != null) this.bookData.imageUrl = this.imageUrl;


      var res = this.httpService.post(this.url, '/api/Book/AddBook', '', this.bookData)
      res.then(value => {
        console.log(value)
        this.router.navigate(['/book'])
      })
    }else{
      console.log(this.bookForm)
      console.log(this.bookForm.errors)
    }
  }
}
