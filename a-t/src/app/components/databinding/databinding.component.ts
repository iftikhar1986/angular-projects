import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  imports: [],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
     
  //string, number, boolean, date, object, array
  courseName: string = 'Angular';
  inputType = "radio";
  rollNo:number = 10;
  isPakistani:boolean = true;
  currentDate = new Date();


  constructor() {
    console.log('DatabindingComponent created');
  }

}
