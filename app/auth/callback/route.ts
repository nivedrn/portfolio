import { createSupabaseBackendClient } from '@/lib/supabaseAppRouterClient'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')

  if (code) {
    const supabase = createSupabaseBackendClient();
    await supabase.auth.exchangeCodeForSession(code)
  }

  return NextResponse.redirect(requestUrl.origin)
}