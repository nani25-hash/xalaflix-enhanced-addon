import React, { useState } from 'react';
import { Play, Download, Sparkles, CheckCircle2, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

export function Hero() {
  const [copied, setCopied] = useState(false);
  const manifestUrl = `${window.location.origin}/manifest.json`;
  const installUrl = manifestUrl.replace('https://', 'stremio://').replace('http://', 'stremio://');

  const handleCopyLink = () => {
    navigator.clipboard.writeText(manifestUrl);
    setCopied(true);
    toast.success("Manifest URL copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInstall = () => {
    window.location.href = installUrl;
  };

  const scrollToCatalog = () => {
    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1632477829576-775f9b8c0e35?auto=format&fit=crop&q=80&w=2000"
          alt="Cinema Background"
          className="w-full h-full object-cover opacity-30 mask-fade-out"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <img 
            src="https://xalaflix.men/upload/images/logo/4.0.png" 
            alt="Xalaflix Logo" 
            className="w-24 h-24 mb-8 object-contain"
          />
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-all px-4 py-1 flex items-center gap-2 w-fit">
            <Sparkles className="w-4 h-4" />
            <span>Enhanced Edition v2.0.0</span>
          </Badge>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-[0.9]">
            THE ULTIMATE <br />
            <span className="text-primary text-glow">XALAFLIX</span> <br />
            EXPERIENCE.
          </h1>
          
          <p className="text-xl text-foreground/60 mb-10 max-w-xl leading-relaxed">
            Discover a new dimension of streaming on Stremio. High-performance indexing, 
            premium metadata, and instant stream resolution for your favorite movies and series.
          </p>
          
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-4">
              <Button 
                size="lg" 
                onClick={handleInstall}
                className="bg-primary hover:bg-primary/90 text-white px-8 h-14 rounded-full font-bold text-lg shadow-xl shadow-primary/20 group"
              >
                <Download className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform" />
                Install Add-on
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={scrollToCatalog}
                className="h-14 px-8 rounded-full font-bold text-lg border-white/10 hover:bg-white/5"
              >
                Explore Catalog
              </Button>
            </div>

            {/* Copy Link Section */}
            <div className="flex items-center gap-2 max-w-md w-full glass-card p-1.5 rounded-full border border-white/5">
              <div className="flex-1 px-4 truncate text-sm text-foreground/40 font-mono">
                {manifestUrl}
              </div>
              <Button
                size="sm"
                variant="ghost"
                onClick={handleCopyLink}
                className="rounded-full h-10 px-4 hover:bg-primary/10 hover:text-primary transition-all gap-2"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied ? "Copied" : "Copy URL"}
              </Button>
            </div>
          </div>

          <div className="mt-12 flex items-center gap-8">
            <div className="flex items-center gap-2 text-sm text-foreground/40 font-medium">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>Auto-Updates</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground/40 font-medium">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>Full Manifest v3</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground/40 font-medium">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>Open Source</span>
            </div>
          </div>
      </div>

      {/* Animated Floating Element */}
      <div className="absolute right-[5%] bottom-[15%] hidden lg:block animate-float">
        <div className="glass-card p-6 rounded-3xl w-80 shadow-2xl rotate-3">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
              <Play className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold">Now Resolving</h3>
              <p className="text-xs text-foreground/40">4K Ultra HD Streams</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-primary w-[85%] animate-pulse" />
            </div>
            <div className="flex justify-between text-[10px] text-foreground/40 font-bold tracking-wider uppercase">
              <span>Speed: 1.2 GB/s</span>
              <span>Uptime: 99.9%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
