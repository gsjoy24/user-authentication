import User from '../user.model';
import { TProduct, TUser } from './user.interface';

// creating user
const createUserIntoDB = async (userData: TUser): Promise<TUser> => {
  const result = await User.create(userData);
  return result;
};

// get all user
const getAllUsersFromDB = async (): Promise<TUser[] | null> => {
  const result = await User.find(
    {},
    'username fullName age email address  -_id',
  );
  return result;
};

// get a single user
const getSingleUserFromDB = async (userId: number): Promise<TUser | null> => {
  const result = await User.isUserExists(userId);
  if (!result) {
    throw new Error('User not found!');
  }
  return result;
};

// update user
const updateUserDataFromDB = async (
  userId: number,
  dataToUpdate: TUser,
): Promise<TUser | null> => {
  const isExist = await User.isUserExists(userId);
  if (!isExist) {
    throw new Error('User not found!');
  }

  const result = await User.findOneAndUpdate({ userId }, dataToUpdate, {
    new: true,
  }).select('-password -orders -__v');
  return result;
};
// delete user
const deleteUserFromDB = async (userId: number) => {
  const isExist = await User.isUserExists(userId);
  if (!isExist) {
    throw new Error('User not found!');
  }
  const result = await User.deleteOne({ userId });
  return result;
};

//  add orders
const addOrderInDB = async (userId: number, productData: TProduct) => {
  const isExist = await User.isUserExists(userId);
  if (!isExist) {
    throw new Error('User not found!');
  }
  const result = await User.updateOne(
    { userId },
    {
      $addToSet: { orders: productData },
    },
  );
  return result;
};

//  get orders of a user
const getOrdersFromDB = async (userId: number) => {
  const isExist = await User.isUserExists(userId);
  if (!isExist) {
    throw new Error('User not found!');
  }
  const result = await User.findOne({}).select('orders');
  return result;
};

export const UserServices = {
  createUserIntoDB,
  getAllUsersFromDB,
  getSingleUserFromDB,
  updateUserDataFromDB,
  deleteUserFromDB,
  addOrderInDB,
  getOrdersFromDB,
};
