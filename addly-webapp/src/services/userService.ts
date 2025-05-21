import { UserModel } from '../models/userModel';

export class UserService {
    private userModel: UserModel;

    constructor() {
        this.userModel = new UserModel();
    }

    async fetchUserData(userId: string) {
        return await this.userModel.getUserById(userId);
    }

    async updateUserData(userId: string, userData: any) {
        return await this.userModel.updateUser(userId, userData);
    }

    async deleteUserData(userId: string) {
        return await this.userModel.deleteUser(userId);
    }
}