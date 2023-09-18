import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const reqBody = await request.json();
    // extract user token
    const { token } = reqBody;
    // create response 
    const response = NextResponse.json({
        message: 'Log out successfully',
        success: true
    })
    // set token in cookie
    response.cookies.delete('token');
    return response;
}