import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostsService } from '../posts.service';
import { ReversePipe } from '../reverse.pipe';

@Component({
  selector: 'app-user-posts',
  standalone: true,
  imports: [CommonModule, FormsModule, ReversePipe],
  templateUrl: './user-posts.component.html',
  styleUrl: './user-posts.component.scss'
})
export class UserPostsComponent {

  constructor(private postsService: PostsService){}

  ngOnInit() {
    this.postsService.fetchPosts().subscribe(posts => this.userPosts = posts);
  }

  userPosts: any[] = [];
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
