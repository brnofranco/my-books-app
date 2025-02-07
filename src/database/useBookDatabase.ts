import { useSQLiteContext } from 'expo-sqlite';
import { Book } from '../models/Book';

export function useBookDatabase() {
	const database = useSQLiteContext();

	async function create(data: Partial<Book>) {
		const statement = await database.prepareAsync(`
            INSERT INTO books (title, author, image) VALUES ("${data.title}", "${data.author}", "${data.image}")
        `);

		try {
			const result = await statement.executeAsync();
			const insertedRowId = result.lastInsertRowId.toLocaleString();

			return { insertedRowId, title: data.title };
		} catch (error) {
			throw error;
		} finally {
			await statement.finalizeAsync();
		}
	}

	async function getAll() {
		try {
			return (await database.getAllAsync('SELECT * FROM books')) as Book[];
		} catch (error) {
			throw error;
		}
	}

	async function getByBookId(id: number) {
		try {
			const query = 'SELECT * FROM books WHERE id LIKE ?';
			return (await database.getFirstAsync(query, `${id}`)) as Book;
		} catch (error) {
			throw error;
		}
	}

	return { create, getAll, getByBookId };
}

