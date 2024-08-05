import { Component } from '@angular/core';
import { Book } from '../book';
import { Guid } from 'guid-typescript';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})

export class BookListComponent {
  bookList: Book[] = [
    {
      "id": Guid.parse("2062c57a-a212-41b3-803e-85402f2d79b9"),
      "name": "Pride and Prejudice",
      "author": "Jane Austen",
      "category": {
        "id": Guid.parse("72a17923-04a6-494b-9d3c-2c0cb161434c"),
        "name": "Romance"
      }
    },
    {
      "id": Guid.parse("2c1541b8-3a93-47bf-9ab7-fbe807bdf68d"),
      "name": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "category": {
        "id": Guid.parse("289ac3de-1cf3-4a0d-8795-f6e9b48b9ddb"),
        "name": "Fiction"
      }
    },
    {
      "id": Guid.parse("37ad38a5-0509-4472-ac2f-3df5b3aa5ec7"),
      "name": "And Then There Were None",
      "author": "Agatha Christie",
      "category": {
        "id": Guid.parse("f5cc7950-1491-467e-9745-58a30b1e8304"),
        "name": "Mystery"
      }
    },
    {
      "id": Guid.parse("50a77a02-c363-473a-a3ad-1959dd49c9cc"),
      "name": "The Hitchhiker's Guide to the Galaxy",
      "author": "Douglas Adams",
      "category": {
        "id": Guid.parse("4cf3922a-76b7-4b5d-83e3-59b2bc2a779f"),
        "name": "Science Fiction"
      }
    },
    {
      "id": Guid.parse("608562c5-0e28-4f15-bab7-3406173c3bed"),
      "name": "The Book Thief",
      "author": "Markus Zusak",
      "category": {
        "id": Guid.parse("a6b1b4f1-66fb-4a6c-b006-610530f90561"),
        "name": "Historical Fiction"
      }
    }
  ]
}
