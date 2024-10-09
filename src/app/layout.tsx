import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mcqs Academy",
  description: " ",
};

function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body>


        {children}
        

      </body>
    </html>
  );
}

export default RootLayout;