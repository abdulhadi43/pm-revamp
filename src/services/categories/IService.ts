import { Category } from '../../entity/Category'

export interface IService {
  get(): Promise<Category[] | null>;
  //getById(id: number): Promise<User | null>;
  add(post: Category): Promise<Category | null>;
  //delete(id: number): Promise<User | null>;
}
