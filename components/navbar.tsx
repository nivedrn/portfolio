"use client";
import { useRouter, usePathname } from "next/navigation";
import { createSupabaseFrontendClient } from "@/lib/supabaseFrontendClient";
import Link from "next/link";
import { cn } from "@/lib/utils";

import ThemeSwitcher from "@/components/themeSwitcher";
import { Icons } from "@/components/icons";
import { Button, buttonVariants } from "@/components/ui/button"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuLabel
} from "@/components/ui/dropdown-menu"
import { useEffect, useState } from "react";

interface Props {
    mode: string;
}

export default function Navbar(props: Props) {
    const router = useRouter();
    const pathname = usePathname();
    const supabase = createSupabaseFrontendClient();
    const [editorMode, setEditorMode] = useState("editor");

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push("/login");
    }

    useEffect(() => {
        if (pathname === "/editor/preview") {
            setEditorMode("preview");
        } else {
            setEditorMode("editor");
        }
    }, [pathname]);

    return (
        <div className="grid grid-cols-3 w-full h-[48px] flex-row items-center pl-0 pr-2 md:px-3 pt-2 sticky top-0 bg-card">
            <div>
                <Link href="/"
                    className={cn(
                        buttonVariants({ variant: "ghost" }),
                        ""
                    )}
                >
                    <Icons.homeLogo className="mx-auto h-7 w-7 opacity-25" />
                </Link>
            </div>

            <div className="flex justify-center text-sm">
                {props.mode === "editor" && (
                    <div className="grid grid-cols-2 w-[100px] lg:w-[250px] bg-accent rounded p-1 gap-1">
                        <div className={`flex flex-row items-center justify-center ${pathname == "/editor/preview" ? "" : "bg-card rounded shadow p-1"}`} >
                            <Icons.editorLogo className="h-5 w-5 opacity-55" />
                            <span className="ml-2 hidden lg:inline">Editor</span>
                        </div>
                        <div className={`flex flex-row items-center justify-center ${pathname == "/editor/preview" ? "bg-card rounded shadow p-1" : ""}`} >
                            <Icons.preview className="h-5 w-5 opacity-55" />
                            <span className="ml-2 hidden lg:inline">Preview</span>
                        </div>
                    </div>
                )}
            </div>

            <div className="flex items-center justify-end">
                {props.mode === "portfolio" && (<Link target="_blank" href="https://defdhwtsvqtwzskexsgd.supabase.co/storage/v1/object/public/nived-public/Nived%20R%20Nambiar%20-%20Resume.pdf" className="pr-10 text-gray-400 hover:text-sky-400"><strong>Resume</strong></Link>)}
                <ThemeSwitcher />
                {props.mode === "portfolio" && (
                    <div>
                        <Link target="_blank" href="https://github.com/nivedrn/portfolio"
                            className={cn(
                                buttonVariants({ variant: "ghost" }),
                                "p-0 px-3 "
                            )}
                        >
                            <Icons.gitHub className="mx-auto h-6 w-6 opacity-25" />
                        </Link>
                        <Link href="/editor"
                            className={cn(
                                buttonVariants({ variant: "ghost" }),
                                "p-0 px-3"
                            )}
                        >
                            <Icons.editorLogo className="mx-auto h-6 w-6 opacity-25" />
                        </Link>
                    </div>
                )}
                <div className="relative">
                    {props.mode === "editor" && (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="m-0">
                                    <Icons.panelRightOpen className="mx-auto h-7 w-7 opacity-25" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56 mr-5">
                                <DropdownMenuRadioGroup value={editorMode} >
                                    <DropdownMenuRadioItem value="editor" onClick={() => { router.push("/editor/profile"); }}>Editor</DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="preview" onClick={() => { router.push("/editor/preview"); }}>Preview</DropdownMenuRadioItem>
                                </DropdownMenuRadioGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuLabel className="text-gray-400">Navigate To</DropdownMenuLabel>
                                <DropdownMenuItem onClick={() => { router.push("/editor/profile"); }}>Profile</DropdownMenuItem>
                                <DropdownMenuItem onClick={() => { router.push("/editor/projects"); }}>Projects</DropdownMenuItem>
                                <DropdownMenuItem onClick={() => { router.push("/editor/raw"); }}>Raw Json</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={() => { router.push("/editor/settings"); }}>Settings</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    )}
                </div>
            </div>
        </div>
    );
}
