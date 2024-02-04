import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createSupabaseReqResClient } from './lib/supabaseReqResClient'

export async function middleware(req: NextRequest) {
    const res = NextResponse.next()

    console.log("Middleware Run");
    const supabase = createSupabaseReqResClient(req, res);
    const data = await supabase.auth.getSession();
    if (data.data.session == null) {
        return NextResponse.redirect(new URL('/login', req.url))
    }

    return res
}

export const config = {
    matcher: ['/editor/profile','/editor/projects','/editor/raw','/editor/settings','/editor/preview','/editor', ]
}