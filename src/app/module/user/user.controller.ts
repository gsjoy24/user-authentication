import { Request, Response } from 'express';
import { UserServices } from './user.service';

const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const result = await UserServices.createUserIntoDB(userData);
    res.status(201).json({
      status: 'success',
      message: 'User created successfully',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      status: 'failed',
      message: error?.message || 'Something went wrong!',
    });
  }
};

export const userControllers = {
  createUser,
};
