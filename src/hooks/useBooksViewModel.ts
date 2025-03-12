import { useState } from 'react';
import { useBooksContext } from '../contexts/BooksContext';
import database from '../database';
import Book from '../models/Book';

export const useBooksViewModel = () => {
	const { books, setBooks } = useBooksContext();
	const booksCollection = database.get<Book>('books');
	const [isLoading, setIsLoading] = useState(false);

	const getBooks = async () => {
		try {
			setIsLoading(true);
			const books = await booksCollection.query().fetch();
			setBooks(books);
		} catch (error) {
			console.error('Error to load books');
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	const createBook = async (data: Book) => {
		try {
			setIsLoading(true);
			const response = await database.write(async () => {
				return await booksCollection.create((book) => {
					book.title = data.title;
					book.author = data.author;
					book.image = data.image;
				});
			});
			await getBooks();

			return response;
		} catch (error) {
			console.error('Error to create book');
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	return { books, isLoading, getBooks, createBook };
};

