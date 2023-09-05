import { Schema } from 'mongoose';
import AbstractODM from './AbstractODM';
import IUser from '../Interfaces/IUser';

class UserODM extends AbstractODM<IUser> {
  constructor() {
    const userSchema = new Schema<IUser>({
      username: {type: String, required: true},
      email: {type: String, required: true},
    });
    super(userSchema, 'User');
  }
}

export default UserODM;
