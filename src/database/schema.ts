import { appSchema, tableSchema } from '@nozbe/watermelondb';

export default appSchema({
	version: 1,
	tables: [
		tableSchema({
			name: 'books',
			columns: [
				{ name: 'title', type: 'string' },
				{ name: 'author', type: 'string' },
				{ name: 'image', type: 'string' },
				{ name: 'favorite', type: 'boolean', isOptional: true },
				{ name: 'comments', type: 'string', isOptional: true },
				{ name: 'grade', type: 'number', isOptional: true },
			],
		}),
	],
});
