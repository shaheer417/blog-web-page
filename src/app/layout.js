import Navbar from '@/components/Navbar';
import './globals.css'
export const metadata = {
  title: "My Blog",
  description: "A blog about tech and programming",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {/* Navbar will be displayed on all pages */}
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
