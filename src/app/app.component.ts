import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserPostsComponent } from './user-posts/user-posts.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserPostsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fb';
}
