export interface Book {
	id: number;
	title: string;
	author: string;
	image: string;
	favorite?: boolean;
	comments?: string;
	grade?: number;
}

