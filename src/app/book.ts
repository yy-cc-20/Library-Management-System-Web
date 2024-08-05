import { Guid } from 'guid-typescript';
import { Category } from './category';
export interface Book {

  id: Guid;
  name: string;
  author: string;
  category: Category;
}
