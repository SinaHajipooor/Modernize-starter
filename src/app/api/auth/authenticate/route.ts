import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    const token = request.cookies.get('token');
    return token;
}