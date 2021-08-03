import { TestBed } from '@angular/core/testing';

import { BookQueryService } from './books/book-query.service';

describe('BookQueryService', () => {
  let service: BookQueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookQueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
