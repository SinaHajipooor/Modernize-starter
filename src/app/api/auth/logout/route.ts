import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    // create response 
    const response = NextResponse.json({
        message: 'Log out successfully',
        success: true
    })
    // set token in cookie
    response.cookies.delete('token');
    return response;
}