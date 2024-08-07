import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditBookComponent } from './edit-book/edit-book.component';

const routeConfig: Routes = [
  {
    path: '',
    component: BookListComponent,
    title: 'Books'
  },
  {
    path: 'book/:id',
    component: BookDetailsComponent,
    title: 'Book details'
  },
  {
    path: 'edit-book/:id',
    component: EditBookComponent,
    title: 'Edit Book'
  },
];

export default routeConfig;
