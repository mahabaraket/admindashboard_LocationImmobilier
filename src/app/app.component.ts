import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  role=localStorage.getItem("role");

  currentUser=localStorage.getItem("currentUser");
  title = 'webLocattionFront';
}
