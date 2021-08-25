import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { studentModel } from 'src/app/models/studentModel';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component implements OnInit {

  public student?: studentModel;
  public studentForm: FormGroup;


  constructor() {
    this.student = {
      id: 1,
      firstName: 'pramot',
      lastName: 'samranwong',
      age: 26,
      tel: '06344556343',
    }

    // this.studentForm = new FormGroup({
    //   id: new FormControl(this.student.id),
    //   firstName: new FormControl(this.student.firstName, [Validators.required, Validators.minLength(5)]),
    //   lastName: new FormControl(this.student.lastName, [Validators.required, Validators.minLength(5)]),
    //   age: new FormControl(this.student.age),
    //   tel: new FormControl(this.student.tel, Validators.required),
    //   address: new FormControl(this.student.address),
    // })

    this.studentForm = new FormGroup({
      id: new FormControl(''),
      firstName: new FormControl('', [Validators.required, Validators.minLength(5)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(5)]),
      age: new FormControl(''),
      tel: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      address: new FormControl(''),
    })
  }

  ngOnInit(): void {
  }

  saveStudent() {
    if (this.studentForm?.invalid) {
      console.log( this.studentForm?.getError);
    } else {
      if (this.studentForm != null) {
        this.student = this.studentForm.value;
        console.log(this.student);
      }
    }
  }

  get f() { return this.studentForm.controls; }
}
