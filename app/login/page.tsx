"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from 'react'
import { createSupabaseFrontendClient } from "@/lib/supabaseFrontendClient";
import { User } from "@supabase/supabase-js";
import Link from "next/link";
import { cn } from "@/lib/utils";

import {
    Card,
    CardContent,
    CardFooter
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons";
import Navbar from "@/components/navbar";

export default function Login() {
    const router = useRouter();
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const supabase = createSupabaseFrontendClient();

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        setIsLoading(true);
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        console.log(formData.get("email"));
        const res = await supabase.auth.signInWithPassword({ email: formData.get("email") as string, password: formData.get("password") as string });

        if (res.error) {
            console.log(res);
            setError(res.error.message);
        } else {
            setUser(res.data.user);
            setError("");
            setIsLoading(false);
            router.push("/edit");
        }
        router.refresh();
        setIsLoading(false);
    }

    console.log({ loading: isLoading, user });

    return (
        <main>
            <Navbar mode="portfolio" />
            <div className="flex min-h-screen flex-col items-center justify-top pt-36">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <div className="flex flex-col space-y-2 text-center">
                        <Icons.editorLogo className="mx-auto h-6 w-6" />
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Portfolio Editor
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Please login to edit the portfolio.
                        </p>
                    </div>
                </div>

                <form onSubmit={onSubmit}>
                    <Card className="w-[350px] sm:w-[450px] mt-5">
                        <CardContent>
                            <div className="grid w-full items-center gap-4 pt-5">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="email">Username / Email</Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        placeholder="Enter username or email address"
                                        type="email"
                                        autoCapitalize="none"
                                        autoComplete="email"
                                        autoCorrect="off"
                                        disabled={isLoading}
                                    />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="password">Password</Label>
                                    <Input
                                        id="password"
                                        name="password"
                                        placeholder="Enter password"
                                        type="password"
                                        autoCorrect="off"
                                        disabled={isLoading}
                                    />
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <div className="grid w-full items-center gap-4">
                                <button className={cn(buttonVariants())} disabled={isLoading}>
                                    {isLoading && (
                                        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                                    )}
                                    Sign In with Email
                                </button>
                                {error != "" && (
                                    <p className="px-1 text-xs text-red-600 justify-center text-center">
                                        {error}
                                    </p>
                                )}
                            </div>
                        </CardFooter>
                    </Card>
                    <p className="px-8 py-5 text-center text-sm text-muted-foreground">
                        <Link
                            href="/"
                            className="hover:text-brand underline underline-offset-4"
                        >
                            Not an user? Go back to Portfolio.
                        </Link>
                    </p>
                </form>
            </div>
        </main>
    );
}
