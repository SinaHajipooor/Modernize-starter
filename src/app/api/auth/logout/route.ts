import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {

    try {
        const response = NextResponse.json({
            message: 'Log out successfull',
            success: true,
        })
        response.cookies.delete('token');
        return response;
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }

}