import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { Guid } from 'guid-typescript';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import { BookService } from '../book.service';
import { AddBookComponent } from '../add-book/add-book.component';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [NgFor, RouterLink, RouterModule, AddBookComponent],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})

export class BookListComponent implements OnInit {
  bookList: Book[] = [];
  constructor(private bookService: BookService) {  }

  ngOnInit(): void {
    this.getBookList();
  }

  getBookList(): void {
    this.bookService.getBookList().subscribe((bookList: Book[]) =>
      this.bookList = bookList
    );
  }

  deleteBook(id: string): void {
    this.bookService.deleteBook(id).subscribe();
  }
}
