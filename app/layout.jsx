import "./globals.css";
import Header from "@/components/Header/Header";
import ReduxProvider from "./ReduxProvider";

export const metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "ShadiKam App",
  icons: {
    icon: "/heart.png", // Default favicon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <Header />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
