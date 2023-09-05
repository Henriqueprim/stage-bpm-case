import IUser from "../Interfaces/IUser";

class User {
    private id?: string;
    protected username: string;
    protected email: string;

    constructor(user: IUser) {
        this.id = user.id;
        this.username = user.username;
        this.email = user.email;
    }

    getUserId(): string | undefined {
        return this.id;
    }

    setUserId(id: string) {
        this.id = id;
    }

    getUsername(): string {
        return this.username;
    }

    setUsername(username: string) {
        this.username = username;
    }

    getEmail(): string {
        return this.email;
    }

    setEmail(email: string) {
        this.email = email;
    }
}

export default User;