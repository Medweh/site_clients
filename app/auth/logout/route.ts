import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function POST() {
  const supabase = await createClient()

  // Sign out user
  await supabase.auth.signOut()

  // Redirect to login page
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const redirectUrl = new URL('/admin/login', baseUrl)
  
  return NextResponse.redirect(redirectUrl, { status: 303 })
}
