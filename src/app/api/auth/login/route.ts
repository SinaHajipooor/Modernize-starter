import { NextRequest, NextResponse } from "next/server";

// set cookie 
export async function POST(request: NextRequest) {
    const reqBody = await request.json();
    // extract user token from request body 
    const { token } = reqBody;
    // create response
    const response = NextResponse.json({
        message: 'Login successfully',
        success: true
    })
    // set token in cookie
    response.cookies.set('token', token, { httpOnly: true });

    return response;
}


