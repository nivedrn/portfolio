import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Portfolio Editor',
    description: 'Console for editing the portfolio',
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
