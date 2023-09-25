import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    // get the token from cookies
    const token = request.cookies.get('token');
    // return the token in the response
    return new Response(JSON.stringify({ token }));
}