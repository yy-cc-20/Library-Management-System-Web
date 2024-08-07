import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Guid } from 'guid-typescript';
import { NgFor, NgIf, UpperCasePipe, Location } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Category } from '../category';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-edit-book',
  standalone: true,
  imports: [NgIf, /*FormGroup,*/ ReactiveFormsModule, NgFor, RouterLink],
  templateUrl: './edit-book.component.html',
  styleUrl: './edit-book.component.css'
})
export class EditBookComponent implements OnInit {
  book: Book | undefined;

  categoryList: Category[] = [];

  editBookForm = new FormGroup({
    bookId: new FormControl(''),
    bookName: new FormControl(''),
    author: new FormControl(''),
    categoryId: new FormControl('')
  });

  constructor(
    private route: ActivatedRoute, // get url param
    private bookService: BookService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getCategoryList();
    this.getBook();
    
  }

  getBook() {
    const id = this.route.snapshot.params['id'];
    this.bookService.getBook(id).subscribe((book: Book) =>
      this.book = book,
    );
  }

  goBack(): void {
    this.location.back();
  }

  getCategoryList(): void {
    this.bookService.getCategoryList().subscribe((categoryList: Category[]) =>
      this.categoryList = categoryList
    );
  }

  submitEditBookForm(): void {
    //this.book!.name = this.editBookForm.value.bookName as string;
    //this.book!.author = this.editBookForm.value.author as string;
    //this.book!.category_id = Guid.parse(this.editBookForm.value.categoryId as string);
    this.bookService.updateBook(this.book!)
      .subscribe(() => this.goBack());
  }
}
