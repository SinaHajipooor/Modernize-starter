import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const response = NextResponse.json({
        message: 'Token get successfully',
        success: true
    })
    const token = response.cookies.get('token');
    console.log(token)
    return token;
}