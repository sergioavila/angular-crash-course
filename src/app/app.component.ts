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
  userPosts = [
    { id: 1, title: 'Post 1', content: 'This is the content of post 1', comments: ['hello', 'world'] },
    { id: 2, title: 'Post 2', content: 'This is the content of post 2', comments: ['world'] },
    { id: 3, title: 'Post 3', content: 'This is the content of post 3', comments: ['hello'] },
  ];
}
