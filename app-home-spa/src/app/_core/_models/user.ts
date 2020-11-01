export interface User {
    id: number;
    username: string;
    role: string;
}
export interface UserForLogin {
    username: string;
    password: string;
}
export interface UserForCreate {
    id: number;
    username: string;
    password: string;
    roleId: number;
}
