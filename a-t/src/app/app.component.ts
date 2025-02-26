import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddEmployeeComponent } from "./components/add-employee/add-employee.component";
import { AddListComponent } from "./components/add-list/add-list.component";
import { DatabindingComponent } from "./components/databinding/databinding.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AddEmployeeComponent, AddListComponent, DatabindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'a-t';
}
