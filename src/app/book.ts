import { Guid } from 'guid-typescript';
import { Category } from './category';
export interface Book {

  id?: string;// Optional, as the ID might be generated by the server
  name: string;
  author: string;
  category_id: string;
  category?: Category;
}
