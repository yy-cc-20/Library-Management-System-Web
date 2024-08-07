import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Guid } from 'guid-typescript';
import { NgFor, NgIf, UpperCasePipe, Location } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent implements OnInit {
  book: Book | undefined;

  constructor(
    private route: ActivatedRoute, // get url param
    private bookService: BookService,
  ) { }

  ngOnInit(): void {
    this.getBook();
  }

  getBook() {
    const id = this.route.snapshot.params['id'];
    this.bookService.getBook(id).subscribe((book: Book) =>
      this.book = book
    );
  }
}
