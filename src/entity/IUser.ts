import { IntegerType } from "typeorm";

export interface IUser {
  phone_nbr: string;
  first_name: string;
  last_name: string;
  profile_name: string;
  email: string;
  date_of_birth: Date;
  location_preference: string;
  is_selfie_verified: Boolean;
  childernId: number;
}
