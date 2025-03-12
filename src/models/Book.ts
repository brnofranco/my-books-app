import { field, text } from '@nozbe/watermelondb/decorators';
import { Model } from '@nozbe/watermelondb';

export default class Book extends Model {
	static table = 'books';

	@text('title') title!: string;
	@text('author') author!: string;
	@text('image') image!: string;
	@field('favorite') favorite?: boolean;
	@text('comments') comments?: string;
	@field('grade') grade?: number;
}

