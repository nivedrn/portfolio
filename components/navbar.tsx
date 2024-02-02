"use client";
import { useRouter } from "next/navigation";

import ThemeSwitcher from "@/components/themeSwitcher";
import { Icons } from "@/components/icons";
import { Label } from "@/components/ui/label"
import { Button, buttonVariants } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
    mode: string;
    handleLogout?: () => void;
}

export default function Navbar(props: Props) {
    const router = useRouter();

    return (
        <div className="grid grid-cols-2 w-full h-[48px] flex-row items-center px-3 pt-2">
            <div className="-z-42">
                <Link href="/"
                    className={cn(
                        buttonVariants({ variant: "ghost" }),
                        ""
                    )}
                >
                    <Icons.homeLogo className="mx-auto h-7 w-7 opacity-25" />
                </Link>
            </div>
            <div className="flex items-center justify-end">
                <ThemeSwitcher />
                {props.mode === "portfolio" && (

                    <div>
                        <Link target="_" href="https://github.com/nivedrn/portfolio"
                            className={cn(
                                buttonVariants({ variant: "ghost" }),
                                "p-0 px-3"
                            )}
                        >
                            <Icons.gitHub className="mx-auto h-6 w-6 opacity-25" />
                        </Link>
                        <Link href="/edit"
                            className={cn(
                                buttonVariants({ variant: "ghost" }),
                                "p-0 px-3"
                            )}
                        >
                            <Icons.editorLogo className="mx-auto h-6 w-6 opacity-25" />
                        </Link>
                    </div>
                )}
                <div>
                    {props.mode === "editor" && (
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="m-0">
                                    <Icons.panelRightOpen className="mx-auto h-7 w-7 opacity-25" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle>Editor</SheetTitle>
                                </SheetHeader>
                                <div className="grid gap-4 py-4">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="name" className="text-right">
                                            Name
                                        </Label>
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="username" className="text-right">
                                            Username
                                        </Label>
                                    </div>
                                </div>
                                <SheetFooter>
                                    <SheetClose asChild>
                                        <Button type="submit" variant="destructive" className="w-full" onClick={props.handleLogout}>Logout</Button>
                                    </SheetClose>
                                </SheetFooter>
                            </SheetContent>
                        </Sheet>
                    )}
                </div>
            </div>
        </div>
    );
}
