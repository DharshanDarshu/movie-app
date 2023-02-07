import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className='mx-32 my-12'>{children}</body>
    </html>
  );
}
