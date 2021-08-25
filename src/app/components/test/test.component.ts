import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  // Binding
  public titile: string = "Web developer";
  public description: string = "Web developers work independently as freelancers or with company teams to create websites.";

  // Event
  public nickName: string = "";
  public address: string = "";
  public tel: string = "";


  //Loop

  public studentNames: string[] = []


  constructor() { }

  ngOnInit(): void {
  }

  public Save(arg:string)
  {
    this.nickName = arg;
    console.log(arg);
  }

  onEnter(arg:any){
    this.address = arg;
    console.log(arg);
  }

  onKeyUp(arg:any)
  {
    this.tel = arg;
    console.log(arg);
  }

  onAddStudent(arg:any){

    this.studentNames.push(arg.value);
    arg.value = "";
  }

  onRemoveStudent(arg:any)
  {
    this.studentNames.splice(this.studentNames.indexOf(arg), 1)
    console.log(arg);
  }
}
