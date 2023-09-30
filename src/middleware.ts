import { withAuth, NextRequestWithAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
    function middleware(request: NextRequestWithAuth) {
        // admin middleware
        if (request.nextUrl.pathname.startsWith('/admin') && request.nextauth.token?.role !== 'admin') {
            return NextResponse.rewrite(
                new URL('/denied', request.url)
            )
        }
        // client middleware
        if (request.nextUrl.pathname.startsWith('/user') && request.nextauth.token?.role !== 'user') {
            return NextResponse.rewrite(
                new URL('/denied', request.url)
            )
        }
        // manager middleware
        if (request.nextUrl.pathname.startsWith('/manager') && request.nextauth.token?.role !== 'manager') {
            return NextResponse.rewrite(
                new URL('/denied', request.url)
            )
        }
    },
    {
        callbacks: {
            authorized: ({ token }) => token?.role === 'user' || token?.role === 'admin' || token?.role === 'manager',
        },
    }
)


export const config = {
    matcher: ['/admin/:path*', '/user/:path*', '/manager/:path*']
}