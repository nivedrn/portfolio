import { CookieOptions, createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export function createSupabaseBackendClient() {
    return createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                get(name: string) {
                    return cookies().get(name)?.value;
                },
                set(name: string, value: string, options: CookieOptions) {
                    cookies().set(name, value, options);
                },
                remove(name: string, options: CookieOptions) {
                    cookies().set(name, "", options);
                },
            },
        }
    );
}
