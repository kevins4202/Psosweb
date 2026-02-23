import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import { ChicagoPage } from "./components/ChicagoPage";
import { MichiganPage } from "./components/MichiganPage";
import { NewJerseyPage } from "./components/NewJerseyPage";
import { Footer } from "./components/Footer";

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const handleCustomNavigate = (event: any) => {
      setCurrentPage(event.detail);
    };

    window.addEventListener('navigate', handleCustomNavigate);
    return () => window.removeEventListener('navigate', handleCustomNavigate);
  }, []);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'chicago':
        return <ChicagoPage />;
      case 'michigan':
        return <MichiganPage />;
      case 'newjersey':
        return <NewJerseyPage />;
      case 'home':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main>
        {renderCurrentPage()}
      </main>
      <Footer />
    </div>
  );
}