import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddEmployeeComponent } from "./components/add-employee/add-employee.component";
import { AddListComponent } from "./components/add-list/add-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AddEmployeeComponent, AddListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'a-t';
}
