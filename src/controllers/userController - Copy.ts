// import { Request, Response } from 'express';
// import { UserService } from '../services/userService';
// import Template from '../global/response';
// import { ServerException } from '../lib/custom-errors';
// import APIError from '../global/response/apierror';
// const service = new UserService();

// class UserController {
//   public static listAll = (req: Request, res: Response, next: any) => {
//     service
//       .get()
//       .then((users) => {
//         if (users && users.length > 0) {
//           res.json(Template.success(users, 'Users Fated successfully'));
//         } else {
//           res.json(Template.success(users, 'Users Fated successfully'));
//         }
//       })
//       .catch((err) => {
//         next(new ServerException('error occurred'));
//       });
//   };
//   public static addNew = (req: Request, res: Response, next: any) => {
//     service
//       .add(req.body)
//       .then((user) => {
//         if (user) {
//           res.json(Template.success(user, 'Users saved successfully'));
//         }
//       })
//       .catch((err) => {
//         if (err.ErrorID == 2110) {
//           next(new APIError(err.message, err.ErrorID));
//         }
//         next(new ServerException('error occurred'));
//       });
//   };


//   public static updateUser = (req: Request, res: Response, next: any) => {
//     const userId = parseInt(req.params.id);
//     const userData = req.body;
//     service
//       .getById(userId, userData)
//       .then((user) => {
//         if (user) {
//           res.json(Template.success(user, 'User updated successfully'));
//         } else {
//           next(new APIError('User not found', 404));
//         }
//       })
//       .catch((err) => {
//         console.error('Error updating user:', err);
//         next(new ServerException('Error occurred'));
//       });
//   };

//   public static deleteUser = (req: Request, res: Response, next: any) => {
//     const userId = parseInt(req.params.id);
//     service
//       .delete(userId)
//       .then(() => {
//         res.json(Template.success(null, 'User deleted successfully'));
//       })
//       .catch((err) => {
//         console.error('Error deleting user:', err);
//         next(new ServerException('Error occurred'));
//       });
//   };
  

// }


// export default UserController;
