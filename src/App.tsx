import React, { useEffect } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Catalog } from '@/components/sections/Catalog';
import { Manifest } from '@/components/sections/Manifest';
import { Footer } from '@/components/sections/Footer';
import { Toaster } from '@/components/ui/sonner';

function App() {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href')!);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 antialiased">
      <Navbar />
      <main>
        <Hero />
        <Catalog />
        <Manifest />
      </main>
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;
