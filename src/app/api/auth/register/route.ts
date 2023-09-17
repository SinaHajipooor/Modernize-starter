import User from '@/models/userModel';
import { NextRequest, NextResponse } from 'next/server';

// define post requests
export async function POST(request: NextRequest) {
    try {
        // get the request body 
        const reqBody = await request.json()
        // extract all the variables that are coming in 
        const { id, username, email, password } = reqBody;
        // create the user 
        const user = new User(id, username, email, password)
        // here we can send the user into api 
        console.log(user)
        //  return response 
        return NextResponse.json({ message: 'user created successfully', success: true, status: 201 })
        // handle errors 
    } catch (error: any) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}