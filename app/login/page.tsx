"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from 'react'
import { createSupabaseFrontendClient } from "@/lib/supabaseFrontendClient";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState<any>(null); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState("");
    const supabase = createSupabaseFrontendClient();

    useEffect(() => {
        async function getUser() {
            const {data : {user}} = await supabase.auth.getUser();
            setUser(user);
            setLoading(false);
        }

        getUser();
    }, []);

    const handleLogin = async () => {
        const res = await supabase.auth.signInWithPassword({ email, password });
        console.log(res);
        if(res.error){
            setError(res.error.message);
        }else{
            setUser(res.data.user);
            setEmail("");
            setPassword("");
            setError("");
            router.push("/edit");
        }
        router.refresh();
    }

    const handleCancel = async () => {
        router.push("/");
    }

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.refresh();
        setUser(null);
    }

    console.log({loading, user});
    
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>
                <Card className="w-[450px]">
                    <CardHeader className="py-8">
                        <CardTitle>Portfolio Editor</CardTitle>
                        <CardDescription>Please login to edit the portfolio.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="email">Username / Email</Label>
                                    <Input id="email" placeholder="Enter username or email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="password">Password</Label>
                                    <Input id="password" type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex justify-between py-5">
                        <Button variant="outline" onClick={handleCancel}>Back to Home</Button>
                        <Button type="submit" onClick={handleLogin}>Log In</Button>
                    </CardFooter>
                </Card>
            </div>
        </main>
    );
}
