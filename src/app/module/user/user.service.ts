import User from '../user.model';
import { TUser } from './user.interface';

const createUserIntoDB = async (userData: TUser): Promise<TUser> => {
  const result = await User.create(userData);
  return result;
};
export const UserServices = {
  createUserIntoDB,
};
