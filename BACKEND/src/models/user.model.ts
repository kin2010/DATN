import { Document, Schema, model } from 'mongoose';
export type IUserDisplay = Omit<
  IUser,
  'password' | 'confirmPassword' | 'printUser'
>;
export interface IUser extends Document {
  _id: string;
  email: string;
  fullName: string;
  role: string;
  address: string;
  gender: number;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  createdAt: Date;
  updateAt: Date;
  avatar: string;
  comparePassword: (otherPassword: string) => Promise<boolean>;
  printUser: () => IUserDisplay;
}
export const GENDER = {
  MALE: 1,
  FEMALE: 0,
};
const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    fullName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
    },
    gender: {
      type: String,
      enum: [GENDER.MALE, GENDER.FEMALE],
    },
  },
  { timestamps: true },
);
const User = model<IUser>('user', UserSchema);
export default User;
