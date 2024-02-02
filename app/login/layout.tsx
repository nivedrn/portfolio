import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Portfolio Editor | Login',
    description: 'Login Page - For editing the portfolio',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>{children}</main>
    );
}
