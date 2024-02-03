"use client";
import { useRouter } from "next/navigation";
import { Separator } from "@/components/ui/separator"

export default function Footer() {
    const router = useRouter();

    return (
        <main className="w-full relative bottom-0" >
            <Separator />
            <div className="flex flex-row w-full items-center justify-center">
                <p className="text-center p-3">
                    Built by&nbsp;<u><a href="https://github.com/nivedrn">nivedrn</a></u>. Hosted on&nbsp;<u><a href="https://portfolio-nived.vercel.app/">Vercel</a></u>. Using&nbsp;<u><a href="https://ui.shadcn.com/">shadcn/ui</a></u>. The source code is available on&nbsp;<u><a href="https://github.com/nivedrn/portfolio">GitHub</a></u>.
                </p>
            </div>
        </main>
    );
}
