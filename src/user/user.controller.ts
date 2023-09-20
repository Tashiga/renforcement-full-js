import { User } from './user';
import { UserService } from './user.service';

export class UserController {
    constructor(private userService: UserService) {}

    add(username: string): User {
        // is the username empty ?
        // is the username whitespaced ?
        // other checks...
        console.log("Hello");
        return this.userService.add(username);
    }

    getById(id: number): User | null {
        // is the id a decimal ?
        // is the id a negative number ?
        // other checks...
        console.log("bye");
        return this.userService.getById(id);
    }

    // getusers(): User[] {
    //     console.log("hi");
    //     return this.userService.getUsers();
    // }
}