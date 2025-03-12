import React, { createContext, useContext, useState } from 'react';
import Book from '../models/Book';

type BooksContextType = {
	books: Book[];
	setBooks: (books: Book[]) => void;
};

const BooksContext = createContext<BooksContextType>({
	books: [],
	setBooks: () => {},
});

export const useBooksContext = () => useContext(BooksContext);

export const BooksProvider = ({ children }: { children: React.ReactNode }) => {
	const [books, setBooks] = useState<Book[]>([]);

	return <BooksContext.Provider value={{ books, setBooks }}>{children}</BooksContext.Provider>;
};

