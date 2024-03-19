import { Category } from '../../entity/Category';

export interface IUserRepository {
  get(): Promise<Category[] | null>;
  //getById(id: number): Promise<User | null>;
  add(category: Category): Promise<Category | null>;
  //delete(id: number): Promise<User | null>;
}
