export type BooksType = {
    id: number;
    name: string;
    authorId: number
}

export interface AuthorsType {
    id: number;
    name: string;
}

export type Query = {
    books: BooksType[];
    authors: AuthorsType[];
}