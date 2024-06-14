import { Inter } from "next/font/google";

// import "@/styles/globals.css";
import "../../styles/globals.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shadcn tutorial",
  description: "A tutorial on how to use Shadcn",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`inter.className flex flex-col gap-2 justify-center items-center h-screen`}>{children}</body>
    </html>
  );
}
