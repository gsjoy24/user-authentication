import bcrypt from 'bcrypt';
import { Schema, model } from 'mongoose';
import { TProduct, TUser, UserModel } from './user/user.interface';
import config from '../config';

const ordersSchema = new Schema<TProduct>(
  {
    productName: {
      type: String,
      required: [true, 'Product name is required!'],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, 'User id is required!'],
      trim: true,
    },
    quantity: {
      type: Number,
      required: [true, 'User id is required!'],
      trim: true,
    },
  },
  { _id: false },
);

const userSchema = new Schema<TUser, UserModel>({
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

// hashing the password
userSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_round),
  );
  next();
});
userSchema.pre('findOneAndUpdate', async function (next) {
  const user = this.getUpdate() as TUser;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_round),
  );

  next();
});

// removing the password from the returning data for user creation.
userSchema.post('save', function (doc, next) {
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const { password, orders, ...userDataWithoutPassword } = this.toObject();
  this.set('password', undefined, { strict: false });
  this.set('orders', undefined, { strict: false });

  // Update the document with userDataWithoutPassword
  Object.assign(this, userDataWithoutPassword);
  next();
});

userSchema.post('save', function (doc, next) {
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const { password, orders, ...userDataWithoutPassword } = this.toObject();
  this.set('password', undefined, { strict: false });
  this.set('orders', undefined, { strict: false });

  // Update the document with userDataWithoutPassword
  Object.assign(this, userDataWithoutPassword);
  next();
});

// creating custom static method
userSchema.statics.isUserExists = async function (userId: number) {
  const existingUser = await User.findOne({ userId }).select(
    '-password -__v -orders',
  );
  return existingUser;
};

const User = model<TUser, UserModel>('User', userSchema);
export default User;
