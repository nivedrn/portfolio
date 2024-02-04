import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Sidemenu from "@/components/sidemenu";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Portfolio Editor',
    description: 'Console for editing the portfolio',
}

export default function EditorLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="flex flex-col flex-1 overflow-y-auto">
            <Navbar mode="editor" />
            <div className="flex flex-1 container p-0 mx-auto mt-[60px] ">
                <div className="flex flex-1 p-5">
                    <Sidemenu />
                    {children}
                </div>
            </div>
            <Footer />
        </main>
    );
}
