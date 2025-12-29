import React from 'react';
import { MousePointer2, Smartphone, Monitor, ShieldCheck, Mail, Twitter, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="install" className="mb-24">
          <div className="glass-card rounded-[3rem] p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-3xl rounded-full" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <h2 className="text-4xl font-black tracking-tight mb-6">READY TO <span className="text-primary text-glow">WATCH?</span></h2>
                <p className="text-foreground/60 mb-8 leading-relaxed max-w-md">
                  Installing Xalaflix Enhanced is simple. Follow these 3 steps to unlock 
                  a world of high-quality content directly in your Stremio library.
                </p>
                
                <div className="space-y-6">
                  {[
                    { icon: <Monitor className="w-5 h-5" />, step: "1", text: "Click the 'Install Add-on' button above." },
                    { icon: <MousePointer2 className="w-5 h-5" />, step: "2", text: "Stremio will automatically prompt to install." },
                    { icon: <ShieldCheck className="w-5 h-5" />, step: "3", text: "Confirm the installation and enjoy!" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-primary font-bold">
                        {item.step}
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-foreground/40">{item.icon}</span>
                        <span className="font-medium">{item.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col items-center justify-center text-center p-8 glass-card border-none bg-white/5 rounded-[2rem]">
                <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
                  <Monitor className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">Desktop & Mobile</h3>
                <p className="text-foreground/40 text-sm mb-8 max-w-xs">
                  Xalaflix Enhanced works flawlessly across all Stremio platforms including Android, iOS, Windows, and macOS.
                </p>
                <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white rounded-2xl h-14 font-bold shadow-xl shadow-primary/20">
                  Add to Stremio Now
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-black tracking-tighter">
                XALAFLIX<span className="text-primary">.</span>
              </span>
            </div>
            <p className="text-foreground/40 max-w-sm mb-8">
              The most advanced Stremio add-on for cinematic content. 
              Enhanced resolvers, premium metadata, and a seamless experience.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="rounded-xl bg-white/5 hover:text-primary"><Twitter className="w-5 h-5" /></Button>
              <Button variant="ghost" size="icon" className="rounded-xl bg-white/5 hover:text-primary"><Github className="w-5 h-5" /></Button>
              <Button variant="ghost" size="icon" className="rounded-xl bg-white/5 hover:text-primary"><Mail className="w-5 h-5" /></Button>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 tracking-wide">QUICK LINKS</h4>
            <ul className="space-y-4 text-sm text-foreground/40 font-medium">
              <li><a href="#hero" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#catalog" className="hover:text-primary transition-colors">Catalog</a></li>
              <li><a href="#manifest" className="hover:text-primary transition-colors">Manifest</a></li>
              <li><a href="#install" className="hover:text-primary transition-colors">How to Install</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 tracking-wide">RESOURCES</h4>
            <ul className="space-y-4 text-sm text-foreground/40 font-medium">
              <li><a href="https://stremio.com" className="hover:text-primary transition-colors">Stremio Site</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Add-on SDK</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold tracking-widest text-foreground/20 uppercase">
          <p>© 2025 XALAFLIX ENHANCED. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
