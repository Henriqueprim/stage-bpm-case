import User from "../Domains/User";
import IUser from "../Interfaces/IUser";
import UserODM from "../Models/UserODM";
import CustomError from "../Errors/CustomError";

class UserServices {
    model = new UserODM();

    private userDomain(user: IUser | null): User | null {
        if (!user) {
            return null;
        }
        return new User(user);
    }

    public async create(user: IUser): Promise<User | null> {
        const createUser = await this.model.create(user);
        return this.userDomain(createUser);
    }

    public async update(id: string, obj: Partial<IUser>): Promise<User | null> {
        const userExists = await this.model.findById(id);
        if(!userExists) {
            throw new CustomError('User not found', 404);
        }
        const updateUser = await this.model.update(id, obj);
        return this.userDomain(updateUser);
    }

    public async delete(id: string): Promise<User | null> {
        const userExists = await this.model.findById(id);
        if(!userExists) {
            throw new CustomError('User not found', 404);
        }
        const deleteUser = await this.model.delete(id);
        return this.userDomain(deleteUser);
    }

    public async getUserById(id: string): Promise<User | null> {
        const user = await this.model.findById(id);
        if(!id) {
            throw new CustomError('User not found', 404);
        }
        return this.userDomain(user);
    }
}

export default UserServices;
