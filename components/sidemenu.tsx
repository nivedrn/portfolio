"use client";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

import { Icons } from "@/components/icons";

export default function Sidemenu() {
    const router = useRouter();
    const pathname = usePathname();

    if (pathname == "/editor/preview") {
        return null;
    } else {
        return (
            <div className="w-[250px] mr-8 hidden lg:block">
                <div className="fixed top-20 w-[250px] pt-2">
                    <div className="grid items-start gap-2">
                        <Link href="/editor/profile">
                            <span className={`group flex items-center rounded px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground ${pathname == "/editor/profile" ? "bg-accent" : "transparent"}`}>
                                <div className="flex flex-row gap-2">
                                    <div><Icons.profile className="h-6 w-6 opacity-25" /></div>
                                    <div className="flex items-center">Profile</div>
                                </div>
                            </span>
                        </Link>
                        <Link href="/editor/projects">
                            <span className={`group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground ${pathname == "/editor/projects" ? "bg-accent" : "transparent"}`}>
                                <div className="flex flex-row gap-2">
                                    <div><Icons.projects className="h-6 w-6 opacity-25" /></div>
                                    <div className="flex items-center">Projects</div>
                                </div>
                            </span>
                        </Link>
                        <Link href="/editor/raw">
                            <span className={`group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground ${pathname == "/editor/raw" ? "bg-accent" : "transparent"}`}>
                                <div className="flex flex-row gap-2">
                                    <div><Icons.json className="h-6 w-6 opacity-25" /></div>
                                    <div className="flex items-center">Raw Json</div>
                                </div>
                            </span>
                        </Link>
                        <Link href="/editor/settings">
                            <span className={`group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground ${pathname == "/editor/settings" ? "bg-accent" : "transparent"}`}>
                                <div className="flex flex-row gap-2">
                                    <div><Icons.settings className="h-6 w-6 opacity-25" /></div>
                                    <div className="flex items-center">Settings</div>
                                </div>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

        );
    }
}
