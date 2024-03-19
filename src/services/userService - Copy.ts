// import { IService } from './IService';
// import { User } from '../entity/User';
// import APIError from '../global/response/apierror';
// import Err from '../global/response/errorcode';
// import { AppDataSource } from '../data-source';
// import { query } from 'express';

// export class UserService implements IService {
//   async get(): Promise<User[] | null> {
//     try {
//       const users = await AppDataSource.manager.find(User);

//       // const query = "SELECT * FROM user where id = 2"
//       // const users = await AppDataSource.manager.query(query);

//       return users;
//     } catch (error) {
//       return null;
//     }
//   }

//   async add(model: User): Promise<User | null> {
//     const { username, role, password, email } = model;
//     const user = new User();
//     user.username = username;
//     user.role = role;
//     user.password = password;
//     user.email = email;
//     try {
//       const savedUser = await AppDataSource.manager.save(user);

//       return savedUser;
//     } catch (e) {
//       console.log(e);
//       return Promise.reject(
//         new APIError('User Already exists', Err.EmailAlreadyExists)
//       );
//     }
//   }

//   async getById(id: number, model: User): Promise<User | null> {
//     try {
//       const userRepository = AppDataSource.manager.getRepository(User);
//       const user = await userRepository.findOne({ where: { id } });
      
//       if (!user) {
//         return null; // User not found
//       }
  
//       // Update user properties with the new data
//       const { username, role, password, email } = model;
//       user.username = username;
//       user.role = role;
//       user.password = password;
//       user.email = email;
  
//       // Save the updated user to the database
//       await userRepository.save(user);
//       return user;
//     } catch (err) {
//       console.log(err);
//       return Promise.reject(new APIError('Failed to update user', Err.EmailAlreadyExists));
//     }
//   }
  
  

//   async delete(id: number): Promise<User | void> {
//     try {
//       const userRepository = AppDataSource.manager.getRepository(User);
//       await userRepository.delete(id);
//     } catch (err) {
//       console.log(err);
//       //return Promise.reject(new APIError('Failed to update user', Err.EmailAlreadyExists));
//     }
//   }
// }
