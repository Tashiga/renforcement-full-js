import { User } from './user';
import { UserService } from './user.service';
import * as fs from 'fs';
// import { v4 as uuidv4 } from 'uuid';

export class UserJSONService implements UserService {

    add(username: string): User {
        if(username!== null || username !== undefined){
            //need to check if username already exist
            // if(this.getByUsername(username)==null){
                try {
                    let user:User[] = [{
                        username: username,
                        id: 4
                }];
                    const jsonString = JSON.stringify(user);
                    fs.writeFileSync('data.json', jsonString, 'utf-8');
                    console.log('Fichier JSON créé avec succès.');
                  } catch (error) {
                    console.error('Erreur lors de la création du fichier JSON :', error);
                  }
            // }
            // else {
            //     console.log("username already exists !");'
            // }
            //add new user in data file
            
        }
        return {username: username, id:4};
        // throw new Error('Method not implemented.');
    }

    getById(id: number): User | null {
        let user:User|undefined;
        try {
            const data = fs.readFileSync('data.json', 'utf-8');
            const users: User[] = JSON.parse(data);
            console.log('Contenu du fichier JSON :', users);
            user = users.find(user=> user.id === id);
        }
        catch(error){
            console.error('Erreur lors de la conversion du JSON :', error);
        }
        
        if(user !== undefined) 
            return user;
        else 
            return null;
        // throw new Error('2.Method not implemented.');
    }

    // getUsers(): User[] {
    //     let users: User[] = [];
    //     try {
    //         const data = fs.readFileSync('data.json', 'utf-8');
    //         const allUsers : User[] = JSON.parse(data);
    //         console.log('2.Contenu du fichier JSON :', users);
    //         users = allUsers;
    //     }
    //     catch(error){
    //         console.error('Erreur lors de la conversion du JSON :', error);
    //     }
    //     console.log("users: ", users);
    //     return users;

    // }

    getByUsername(username: string): User | null {
        let user:User|undefined;
        try {
            const data = fs.readFileSync('data.json', 'utf-8');
            const users: User[] = JSON.parse(data);
            console.log('Contenu du fichier JSON :', users.length, "\nuser : ", users.find(user=> user.username === username));
            user = users.find(user=> user.username === username);
        }
        catch(error){
            console.error('Erreur lors de la conversion du JSON :', error);
        }
        
        if(user !== undefined) 
            return user;
        else 
            return null;
        // throw new Error('2.Method not implemented.');
    }

    deleteUser(id: number): void{
        throw new Error('3.Method not implemented.');
    }

    updateById(id: number, username: string): User{
        throw new Error('4.Method not implemented.');
    }
      
}