import { IService } from './IService';
import { User } from '../entity/User';
import APIError from '../global/response/apierror';
import Err from '../global/response/errorcode';
import { AppDataSource } from '../data-source';

export class UserService implements IService {
  async get(): Promise<User[] | null> {
    try {
      const users = await AppDataSource.manager.find(User);

      return users;
    } catch (error) {
      return null;
    }
  }

  async add(model: User): Promise<User | null> {
    const { phone_nbr, first_name, last_name, profile_name, email, date_of_birth, location_preference, is_selfie_verified } = model;

    if (!phone_nbr) {
      return Promise.reject(new APIError('Please enter phone number', Err.EmailAlreadyExists));
    }

    // Check if user with the same phone number already exists
    const existingUser = await AppDataSource.manager.createQueryBuilder(User, "user")
    .where("user.phone_nbr = :phone_nbr", { phone_nbr })
    .getOne();
    if (existingUser) {
      return Promise.reject(new APIError('Phone number already registered', Err.EmailAlreadyExists));
    }
    
    const user = new User();
    user.phone_nbr = phone_nbr;
    // user.first_name = first_name;
    // user.last_name = last_name;
    // user.profile_name = profile_name;
    // user.email = email;
    // user.date_of_birth = date_of_birth;
    // user.location_preference = location_preference;
    // user.is_selfie_verified = is_selfie_verified;
    try {

        // Save the user
       const savedUser = await AppDataSource.manager.save(user);

       return savedUser;
    } catch (e) {
      console.log(e);
      return Promise.reject(
        new APIError('User Already exists', Err.EmailAlreadyExists)
      );
    }
  }

  async getById(id: number, model: User): Promise<User | null> {
    try {
        const userRepository = AppDataSource.manager.getRepository(User);
        const user = await userRepository.findOne({ where: { id } });
        
        if (!user) {
            return null; // User not found
        }
        
        // Define an array of properties to update
        const propertiesToUpdate = [
            'first_name',
            'last_name',
            'profile_name',
            'email',
            'date_of_birth',
            'location_preference',
            'is_selfie_verified',
            'childern',
            'gender',
            'marital_status'
        ] as (keyof User)[];
        
        // Iterate over the array and update user properties with the new data
        propertiesToUpdate.forEach(property => {
          if (model[property] !== undefined) {
              (user as any)[property] = model[property];
          }
      });
        
        // Save the updated user to the database
        await userRepository.save(user);
        return user;
    } catch (err) {
        console.log(err);
        return Promise.reject(new APIError('Failed to update user', Err.EmailAlreadyExists));
    }
}
  
}




