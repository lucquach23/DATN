import { Role } from "./role";
export class User {
    idAccount: number;
    username: string;
    pass: string; 
    role: Role;
    token?: string;
    idFaculty:string;
}