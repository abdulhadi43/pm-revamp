import { Post } from '../../entity/Post';

export interface IUserRepository {
  get(): Promise<Post[] | null>;
  //getById(id: number): Promise<User | null>;
  add(post: Post): Promise<Post | null>;
  //delete(id: number): Promise<User | null>;
}
