import { SQLiteDatabase } from 'expo-sqlite';

export async function initializeDatabase(database: SQLiteDatabase) {
	await database.execAsync(`
        CREATE TABLE IF NOT EXISTS books (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title VARCHAR(255) NOT NULL,
            author VARCHAR(255) NOT NULL,
            image TEXT NOT NULL,
            favorite BOOLEAN DEFAULT FALSE,
            comments TEXT,
            grade INT CHECK (grade BETWEEN 0 AND 10)
        );
    `);
}

