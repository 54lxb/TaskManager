export interface User {
    // ? 问号表示该参数可有可无
    id?:string;
    email: string;
    password: string;
    username: string;
    avatar: string;
}