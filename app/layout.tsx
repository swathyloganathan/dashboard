import { Providers } from "./providers";
import { Navbar } from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors">
        <Providers>
           <Navbar />
                <div className="flex">
                 <Sidebar />
                  <div className="flex-auto p-10">
                     {children}
                  </div>
                </div>
         </Providers>
      </body>
    </html>
  );
}
