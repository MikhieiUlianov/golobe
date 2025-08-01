import Promo from "@/components/promo/promo";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Promo />
      {children}
    </>
  );
}
