import React from 'react';
import { Play, Search, Menu, Info, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-none bg-background/60 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <img 
                src="https://xalaflix.men/upload/images/logo/4.0.png" 
                alt="Logo" 
                className="w-10 h-10 object-contain shadow-lg"
              />
              <span className="text-2xl font-black tracking-tighter bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                XALAFLIX<span className="text-primary">.</span>
              </span>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              <a href="#hero" className="text-sm font-medium text-foreground/60 hover:text-primary transition-colors">Home</a>
              <a href="#catalog" className="text-sm font-medium text-foreground/60 hover:text-primary transition-colors">Catalog</a>
              <a href="#manifest" className="text-sm font-medium text-foreground/60 hover:text-primary transition-colors">Manifest</a>
              <a href="#install" className="text-sm font-medium text-foreground/60 hover:text-primary transition-colors">Install</a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-foreground/60 hover:text-primary">
              <Search className="w-5 h-5" />
            </Button>
            <Button 
              onClick={() => {
                const manifestUrl = `${window.location.origin}/manifest.json`;
                const installUrl = manifestUrl.replace('https://', 'stremio://').replace('http://', 'stremio://');
                window.location.href = installUrl;
              }}
              className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 px-6 rounded-full font-bold"
            >
              Install Add-on
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
