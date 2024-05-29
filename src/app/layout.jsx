import Navbar from "./component/navbar/navbar";
import Providers from "../context/ThemeContext";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Roboto } from "next/font/google";
import { Montserrat } from "next/font/google";

const inter = Poppins({ subsets: ["latin"], weight: "400" });

// export const metadata = {
//   title: "Sterling Homes",
//   description:
//     "Discover your dream home with Sterling Homes - your premier destination for real estate excellence. Explore a curated selection of properties and cooperative living spaces designed to meet your unique lifestyle needs. Experience seamless navigation, expert guidance, and unparalleled convenience in finding your perfect place to call home.",
//   image: "/sterling-logo.png",
// };

// export const metadata = {
//   title: "Sterling Homes",
//   description:
//     "Discover your dream home with Sterling Homes - your premier destination for real estate excellence. Explore a curated selection of properties and cooperative living spaces designed to meet your unique lifestyle needs. Experience seamless navigation, expert guidance, and unparalleled convenience in finding your perfect place to call home.",
//   icons: {
//     icon: "/favicon.ico",
//     shortcut: "/favicon-32x32.png",
//     apple: "/apple-touch-icon.png",
//   },
//   openGraph: {
//     title: "Sterling Homes",
//     description: "Sterling Homesllc",
//     images: [
//       {
//         url: "/sterling-logo.png",
//         width: 800,
//         height: 600,
//         alt: "Sterling Homes Logo",
//       },
//     ],
//   },
// };
// export const metadata = {
//   metadataBase: "https://www.sterlinghomesllc.com/", // Replace 'yourdomain.com' with your actual domain
//   title: "Sterling Homes",
//   description:
//     "Discover your dream home with Sterling Homes - your premier destination for real estate excellence.",
//   icons: {
//     icon: "/favicon.ico",
//     shortcut: "/favicon-32x32.png",
//     apple: "/apple-touch-icon.png",
//   },
//   openGraph: {
//     title: "Sterling Homes",
//     description:
//       "Discover your dream home with Sterling Homes - your premier destination for real estate excellence.",
//     images: [
//       {
//         url: "/sterling-logo.png",
//         width: 800,
//         height: 600,
//         alt: "Sterling Homes Logo",
//       },
//     ],
//   },
// };
export const metadata = {
  metadataBase: new URL("https://www.sterlinghomesllc.com"), // Replace with your actual domain
  title: "Sterling Homes",
  description:
    "Discover your dream home with Sterling Homes - your premier destination for real estate excellence.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Sterling Homes",
    description:
      "Discover your dream home with Sterling Homes - your premier destination for real estate excellence.",
    images: [
      {
        url: "/sterling-logo.png",
        width: 800,
        height: 600,
        alt: "Sterling Homes Logo",
      },
    ],
  },
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
            className="theme width-fit-content 2xl-max:w-full 2xl:w-fit "
            // style={{ width: "fit-content" }}
          >
            {/* <Navbar /> */}
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
