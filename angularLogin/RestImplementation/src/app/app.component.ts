import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'LoginApp';
  currentIndex = 1;

  constructor(private auth:AuthService){

  }
  logOut(){
    this.auth.signOut();
      }
}
