import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import schema from './schema';
import Book from '../models/Book';

const adapter = new SQLiteAdapter({
	schema,
	jsi: true,
	onSetUpError: (error) => console.error(error),
});

const database = new Database({
	adapter,
	modelClasses: [Book],
});

export default database;

