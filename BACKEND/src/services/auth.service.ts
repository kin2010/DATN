import { userInfo } from 'os';
import httpStatus from 'http-status';
import User, { IUser } from '../models/user.model';
import APIError from '../utils/APIError';
export interface IRegister {
  email: string;
  password: string;
  fullName: string;
}
export class AuthService {
  static register = async ({
    email,
    password,
    fullName,
  }: IRegister): Promise<void> => {
    try {
      const isUser = await User.findOne({ email });
      if (isUser) {
        throw new APIError({
          message: 'Email is already exists',
          status: httpStatus.INTERNAL_SERVER_ERROR,
        });
      }
    } catch (error) {}
  };
}
