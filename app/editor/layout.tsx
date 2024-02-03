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
        <main className="flex flex-col flex-1">
            <Navbar mode="editor"/>
            <div className="container p-0 mx-auto mt-[10px] md:mt-[20px] lg:mt-[40px] grow ">
                <div className="flex">
                    <Sidemenu />                    
                    <div className="flex-1 overflow-y-auto">
                        <div className="p-4">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
