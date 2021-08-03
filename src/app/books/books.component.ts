import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { BookService } from './book.service';
import { BooksType, AuthorsType, Query } from './../types'
import { BookQueryService } from './book-query.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: BooksType[];
  // books: Observable<BooksType[]>;

  constructor(private apollo: Apollo, private bookServ: BookService,
    private bookQuery: BookQueryService) {
  }

  ngOnInit() {
    //  First Method
    this.bookQuery.watch().valueChanges.subscribe(res => this.books = res.data.books)


    // Second Method
    // this.apollo.watchQuery<Query>({
    //   query: gql`
    //     query {
    //       books{
    //       id,
    //       name,
    //       author {
    //         name
    //       }
    //     }
    //   }
    //     `
    // }).valueChanges
    //   .subscribe(res => this.books = res.data.books)
    // .pipe(map(res => res.data.books))

  }

}
