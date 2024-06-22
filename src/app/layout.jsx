import Navbar from "./component/navbar/navbar";
import Providers from "../context/ThemeContext";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Roboto } from "next/font/google";
import { Montserrat } from "next/font/google";

const inter = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata = {
  metadataBase: new URL("https://www.sterlinghomesllc.com"),
  title: "Sterling Homes",
  description:
    "Discover your dream home with Sterling Homes - your premier destination for real estate excellence.",
  favicon: "/app/favicon.ico",
  sizes: "32x32",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div
            className="theme"
            // style={{ width: "fit-content" }} width-fit-content 2xl-max:w-full 2xl:w-fit
          >
            {/* <Navbar /> */}
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
