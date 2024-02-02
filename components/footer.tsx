"use client";
import { useRouter } from "next/navigation";

import { Icons } from "@/components/icons";

export default function Footer() {
    const router = useRouter();

    return (
        <div className="flex flex-col w-full h-[48px] items-center px-5 pt-3">
            <div>
                Footer
            </div>
        </div>
    );
}
