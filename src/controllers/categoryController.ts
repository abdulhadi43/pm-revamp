import { Request, Response } from 'express';
import { CategoryService } from '../services/categories/categoryService';
import Template from '../global/response';
import { ServerException } from '../lib/custom-errors';
import APIError from '../global/response/apierror';
const service = new CategoryService();

class CategoryController {
  public static listAll = (req: Request, res: Response, next: any) => {
    service
      .get()
      .then((categories) => {
        if (categories && categories.length > 0) {
          res.json(Template.success(categories, 'Categories Fated successfully'));
        } else {
          res.json(Template.success(categories, 'Categories Fated successfully'));
        }
      })
      .catch((err) => {
        next(new ServerException('error occurred'));
      });
  };
  public static addNew = (req: Request, res: Response, next: any) => {
    service
      .add(req.body)
      .then((category) => {
        if (category) {
          res.json(Template.success(category, 'Categories saved successfully'));
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

export default CategoryController;
