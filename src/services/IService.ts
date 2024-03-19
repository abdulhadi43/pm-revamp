import { User } from '../entity/User';

export interface IService {
  get(): Promise<User[] | null>;
  getById(id: number, model: Partial<User>): Promise<User | null>;
  add(user: User): Promise<User | null>;
  // delete(id: number): Promise<User | void>;
}
