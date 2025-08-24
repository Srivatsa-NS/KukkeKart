import Header from "./Header";
import Footer from "./Footer";
import { useState, useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed top-0 left-0 w-full h-20 z-50 group">
        <div className={`${isAtTop ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-500`}>
          <Header />
        </div>
      </div>
      <main className="flex-grow pt-34">{children}</main>
      <Footer />
    </div>
  );
}
