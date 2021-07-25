import { Component, OnInit } from '@angular/core';
// import { Query } from 'apollo-angular';
// import gql from 'graphql-tag';
// import { BooksType, AuthorsType } from '../types'

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  // books: BooksType[];

  constructor() {
    // private Query: Query
  }

  ngOnInit() {
    //   this.Query.watch({
    //     query: gql`
    //     query books {
    //       id
    //       name
    //       authorId
    //     }
    //     `
    //   }).valueChanges.subscribe(res => {
    //     console.log(res.data)
    //   })
  }

}
