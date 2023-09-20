import { User } from "./user";

export interface UserService {
    add(username: string): User;
    getById(is: number):User | null;
    // getUsers(): User[];
    deleteUser(id: number): void;
    updateById(id: number, username: string): User;
    
}