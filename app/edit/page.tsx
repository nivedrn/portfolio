"use client";
import { useRouter } from "next/navigation";
import { User } from "@supabase/supabase-js";
import { createSupabaseFrontendClient } from "@/lib/supabaseFrontendClient";
import { useState } from "react";

import Navbar from "@/components/navbar";
import { Icons } from "@/components/icons";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

import Editor from "@/components/editor/editor";
import Portfolio from "@/components/portfolio/portfolio";

export default function Edit() {
    const router = useRouter();
    const supabase = createSupabaseFrontendClient();
    const [user, setUser] = useState<User | null>(null);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push("/login");
        setUser(null);
    }

    return (
        <main>
            <Navbar mode="editor" handleLogout={handleLogout} />
            <Tabs defaultValue="editor">
                <div className="flex justify-center absolute inset-x-0 top-2 left-0 right-0 w-[200px] m-auto">
                    <TabsList className="grid grid-cols-2 w-[100px] lg:w-[200px]">
                        <TabsTrigger value="editor">
                            <div className="flex flex-row items-center justify-center" >
                                <Icons.editorLogo className="h-5 w-5 opacity-55" />
                                <span className="mr-3 ml-2 hidden lg:inline">Editor</span>
                            </div></TabsTrigger>
                        <TabsTrigger value="portfolio">
                            <div className="flex flex-row items-center justify-center" >
                                <Icons.preview className="h-5 w-5 opacity-55" />
                                <span className="ml-2 hidden lg:inline">Preview</span>
                            </div>
                        </TabsTrigger>
                    </TabsList>
                </div>

                <TabsContent value="editor">
                    <Editor />
                </TabsContent>

                <TabsContent value="portfolio">
                    <Portfolio />
                </TabsContent>
            </Tabs>
        </main>
    );
}
