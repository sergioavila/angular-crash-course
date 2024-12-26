import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-posts',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-posts.component.html',
  styleUrl: './user-posts.component.scss'
})
export class UserPostsComponent {
  @Input() userPosts: any[] = [];
  likedPosts: Set<number> = new Set();
  newComment: string = '';

  likePost(postId: number) : void {
    if (this.likedPosts.has(postId)) {
      this.likedPosts.delete(postId);
    } else {
      this.likedPosts.add(postId);
    }
  }

  addComment(postId: number) : void {
    const post = this.userPosts.find(post => post.id === postId);
    if (post && this.newComment.trim()) {
      post.comments.push(this.newComment);
      this.newComment = '';
    }
  }

}
