import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getProfile(request: Request): Promise<import("./type").IUser>;
}
