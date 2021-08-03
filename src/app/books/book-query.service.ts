import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular'
import gql from 'graphql-tag';

import { BooksType, AuthorsType } from './../types'


@Injectable({
  providedIn: 'root'
})
export class BookQueryService extends Query<{ books: BooksType[] }> {
  document = gql`
   query {
          books{
          id,
          name,
          author {
            name
          }
        }
      }
`

}
