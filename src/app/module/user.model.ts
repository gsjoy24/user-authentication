import bcrypt from 'bcrypt';
import { Schema, model } from 'mongoose';
import { TOrder, TUser } from './user/user.interface';
import config from '../config';

const ordersSchema = new Schema<TOrder>({
  productName: {
    type: String,
    required: [true, 'Product name is required!'],
    trim: true,
  },
  price: { type: Number, required: [true, 'User id is required!'], trim: true },
  quantity: {
    type: Number,
    required: [true, 'User id is required!'],
    trim: true,
  },
});

const userSchema = new Schema<TUser>({
  userId: {
    type: Number,
    required: [true, 'User id is required!'],
    unique: true,
    trim: true,
  },
  username: {
    type: String,
    required: [true, 'Username is required!'],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required!'],
    trim: true,
  },
  fullName: {
    firstName: {
      type: String,
      required: [true, 'First name is required!'],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, 'Last name is required!'],
      trim: true,
    },
  },
  age: { type: Number, required: [true, 'Age is required!'] },
  email: {
    type: String,
    required: [true, 'Email is required!'],
    unique: true,
    trim: true,
    lowercase: true,
  },
  isActive: {
    type: Boolean,
  },
  hobbies: {
    type: [String],
    required: [true, 'Hobbies are required!'],
    trim: true,
  },
  address: {
    street: {
      type: String,
      required: [true, 'Username is required!'],
      trim: true,
    },
    city: {
      type: String,
      required: [true, 'Username is required!'],
      trim: true,
    },
    country: {
      type: String,
      required: [true, 'Username is required!'],
      trim: true,
    },
  },
  orders: [ordersSchema],
});

//! pre save middleware/hook || hashing password
userSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_round),
  );
  next();
});

const User = model<TUser>('User', userSchema);
export default User;