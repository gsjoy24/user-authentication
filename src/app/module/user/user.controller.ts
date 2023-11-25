import { Request, Response } from 'express';
import { UserServices } from './user.service';
import { TProduct, TUser } from './user.interface';

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

const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId = Number(req.params.userId);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
    const result = await UserServices.deleteUserFromDB(userId);
    res.status(200).json({
      success: true,
      message: 'User deleted successfully!',
      data: null,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: error?.message || 'Something went wrong!',
      error: {
        code: 404,
        description: error?.message || 'Something went wrong!',
      },
    });
  }
};

const addOrder = async (req: Request, res: Response) => {
  try {
    const productData: TProduct = req.body;
    const userId: number = Number(req.params.userId);
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    const result = await UserServices.addOrderInDB(userId, productData);
    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: null,
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

const getOrders = async (req: Request, res: Response) => {
  try {
    const userId = Number(req.params.userId);
    const result = await UserServices.getOrdersFromDB(userId);
    res.status(200).json({
      success: true,
      message: 'Order fetched successfully!',
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

const calculateTotalPrice = async (req: Request, res: Response) => {
  try {
    const userId = Number(req.params.userId);
    const totalPrice = await UserServices.calculateTotalPrice(userId);
    res.status(200).json({
      success: true,
      message: 'Total price calculated successfully!',
      data: {
        totalPrice,
      },
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
  deleteUser,
  addOrder,
  getOrders,
  calculateTotalPrice,
};
