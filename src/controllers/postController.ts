import { Request, Response } from 'express';
import { PostService } from '../services/post/postService';
import Template from '../global/response';
import { ServerException } from '../lib/custom-errors';
import APIError from '../global/response/apierror';
const service = new PostService();

class PostController {
  public static listAll = (req: Request, res: Response, next: any) => {
    service
      .get()
      .then((posts) => {
        if (posts && posts.length > 0) {
          res.json(Template.success(posts, 'Posts Fated successfully'));
        } else {
          res.json(Template.success(posts, 'Posts Fated successfully'));
        }
      })
      .catch((err) => {
        next(new ServerException('error occurred'));
      });
  };
  public static addNew = (req: Request, res: Response, next: any) => {
    service
      .add(req.body)
      .then((post) => {
        if (post) {
          res.json(Template.success(post, 'Posts saved successfully'));
        }
      })
      .catch((err) => {
        if (err.ErrorID == 2110) {
          next(new APIError(err.message, err.ErrorID));
        }
        next(new ServerException('error occurred'));
      });
  };

  
}

export default PostController;
