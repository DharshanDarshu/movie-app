import "../styles/globals.css";
import Header from "./Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className=''>
        <Header />
        <main className='mx-20 '>{children}</main>
      </body>
    </html>
  );
}
