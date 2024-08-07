import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { Category } from '../category';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Guid } from 'guid-typescript';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {
  categoryList: Category[] = [];

  addBookForm = new FormGroup({
    bookName: new FormControl(''),
    author: new FormControl(''),
    categoryId: new FormControl('')
  });

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getCategoryList();
  }

  getCategoryList(): void {
    this.bookService.getCategoryList().subscribe((categoryList: Category[]) =>
      this.categoryList = categoryList
    );
  }

  submitAddBookForm(): void {
    this.bookService.addBook(
      this.addBookForm.value.bookName as string,
      this.addBookForm.value.author as string,
      this.addBookForm.value.categoryId as string)
    .subscribe();
  }
}
