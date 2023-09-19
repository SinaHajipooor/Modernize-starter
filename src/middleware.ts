import { NextResponse, NextRequest } from "next/server";


// loging part
export function middleware(request: NextRequest) {
    // get the path that user has entered
    const path = request.nextUrl.pathname;
    // check if the user path is public or not 
    const isPublicPath = path.startsWith('/auth');
    // Extract token from cookies
    const token = request.cookies.get('token')?.value || '';
    // Redirect the authenticated users into dashboard
    if (isPublicPath && token) {
        return NextResponse.redirect(new URL('/', request.nextUrl));
    }
    // Redirect the users that are not authenticated into the login page
    if (!isPublicPath && !token) {
        console.log('not token');
        return NextResponse.redirect(new URL('/auth/login', request.nextUrl));
    }
}

// matchin part 
export const config = {
    matcher: ['/', '/auth/login', '/auth/register', '/auth/two-steps', '/auth/forgot-password']
}