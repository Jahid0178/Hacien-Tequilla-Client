import "./globals.css";
import { PT_Sans } from "next/font/google";

const pt_sans = PT_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Hacien Tequila",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={pt_sans.className} suppressHydrationWarning={true}>
        <main>{children}</main>
      </body>
    </html>
  );
}
