import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Next App</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="test next13" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/flowbite@1.5.3/dist/flowbite.min.css"
        />
      </head>
      <body className="bg-gray-600">
        {children}
        <script src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js" async />
      </body>
    </html>
  );
}
