import NextAuth from "next-auth";

declare module 'next-auth' {
    interface User {
        id: number,
        username: string,
        mobile: string,
        first_name: string,
        last_name: string,
        avatar: string,
        status: string,
        role: string,
    }
    interface Session {
        user: User
        token: {
            username: string,
            id: number,
            mobile: string,
            first_name: string,
            last_name: string,
            avatar: string,
            status: string,
            role: string,
        }
    }
}