import { Request, Response } from 'express';
import { UserServices } from './user.service';

const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const result = await UserServices.createUserIntoDB(userData);
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    const { password, orders, ...userDataWithoutPasswordAndOrders } =
      result.toObject();

    res.status(201).json({
      success: true,
      message: 'User created successfully!',
      data: userDataWithoutPasswordAndOrders,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message || 'Something went wrong!',
    });
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getAllUsersFromDB();
    res.status(201).json({
      success: true,
      message: 'Users fetched successfully!',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error?.message || 'Something went wrong!',
    });
  }
};

export const userControllers = {
  createUser,
  getAllUsers,
};
