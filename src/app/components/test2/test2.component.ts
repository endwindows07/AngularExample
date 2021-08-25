import { studentModel } from './../../models/studentModel';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  studentForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    age: new FormControl(''),
  })
  constructor() {
    this.student = {
      id: 1,
      firstName: 'pramot',
      lastName: 'samranwong',
      age: 26
    }
  }

 public student?: studentModel;
  ngOnInit(): void {

  }
}
