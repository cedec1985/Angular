import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogService } from '../../app/blog.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})

export class BlogComponent implements OnInit {
  articles: any[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.getArticles().subscribe((data:any) => {
      this.articles = data;
    });
  }
}
