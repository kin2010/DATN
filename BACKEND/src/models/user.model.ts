import { Document, Schema, model } from 'mongoose';
export interface IUser extends Document {
  _id: string;
  email: string;
  password: string;
  fullName: string;
  role: string;
  phoneNumber: string;
}
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
  },
  { timestamps: true },
);
const User = model<IUser>('user', UserSchema);
export default User;
