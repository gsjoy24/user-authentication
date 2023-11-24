import { Request, Response } from 'express';
import { UserServices } from './user.service';
import { TUser } from './user.interface';

const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const result = await UserServices.createUserIntoDB(userData);

    res.status(200).json({
      success: true,
      message: 'User created successfully!',
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

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getAllUsersFromDB();
    res.status(200).json({
      success: true,
      message: 'Users fetched successfully!',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: error?.message || 'Something went wrong!',
    });
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const userId = Number(req.params.userId);
    const result = await UserServices.getSingleUserFromDB(userId);
    res.status(200).json({
      success: true,
      message: 'User fetched successfully!',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: error?.message || 'Something went wrong!',
      error: {
        code: 404,
        description: error?.message,
      },
    });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const userId: number = Number(req.params.userId);
    const dataToUpdate: TUser = req.body;
    const result = await UserServices.updateUserDataFromDB(
      userId,
      dataToUpdate,
    );
    res.status(200).json({
      success: true,
      message: 'User updated successfully!',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: error?.message || 'Something went wrong!',
      error: {
        code: 404,
        description: error?.message,
      },
    });
  }
};

export const userControllers = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
};
