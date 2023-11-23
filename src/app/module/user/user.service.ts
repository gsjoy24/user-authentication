import User from '../user.model';
import { TUser } from './user.interface';

const createUserIntoDB = async (userData: TUser): Promise<TUser> => {
  const result = await User.create(userData);
  return result;
};
const getAllUsersFromDB = async (): Promise<TUser[] | null> => {
  const result = await User.find(
    {},
    'username fullName age email address  -_id',
  );
  return result;
};
const getSingleUserFromDB = async (userId: number): Promise<TUser | null> => {
  const result = await User.findOne({ userId });
  return result;
};
export const UserServices = {
  createUserIntoDB,
  getAllUsersFromDB,
  getSingleUserFromDB,
};
