import { IService } from './IService';
import { Post } from '../../entity/Post';
import APIError from '../../global/response/apierror';
import Err from '../../global/response/errorcode';
import { AppDataSource } from '../../data-source';

export class CategoryService implements IService {
  async get(): Promise<Post[] | null> {
    try {
      const posts = await AppDataSource.manager.find(Post);

      return posts;
    } catch (error) {
      return null;
    }
  }

  async add(model: Post): Promise<Post | null> {
    const { title, content, user } = model;
    const post = new Post();
    post.title = title;
    post.content = content;
    post.user = user;
    try {
      const savedPost = await AppDataSource.manager.save(post);

      return savedPost;
    } catch (e) {
      console.log(e);
      return Promise.reject(
        new APIError('Post Already exists', Err.EmailAlreadyExists)
      );
    }
  }
}
