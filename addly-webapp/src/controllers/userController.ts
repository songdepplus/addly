import { Request, Response } from 'express';
import UserService from '../services/userService';

class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    public getUserData = async (req: Request, res: Response): Promise<void> => {
        try {
            const userData = await this.userService.fetchUserData(req.params.id);
            res.status(200).json(userData);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching user data', error });
        }
    };

    public postUserData = async (req: Request, res: Response): Promise<void> => {
        try {
            const newUserData = await this.userService.updateUserData(req.body);
            res.status(201).json(newUserData);
        } catch (error) {
            res.status(500).json({ message: 'Error posting user data', error });
        }
    };

    public deleteUserData = async (req: Request, res: Response): Promise<void> => {
        try {
            await this.userService.deleteUserData(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: 'Error deleting user data', error });
        }
    };
}

export default UserController;