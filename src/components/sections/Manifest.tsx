import React, { useState } from 'react';
import { Terminal, Copy, Check, FileJson, Cpu, Zap, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const MANIFEST_DATA = {
  "id": "com.xalaflix.enhanced",
  "version": "2.0.0",
  "name": "Xalaflix Enhanced",
  "description": "Watch movies and series from Xalaflix in Stremio with maximally enhanced resolvers.",
  "logo": "https://xalaflix.men/upload/images/logo/4.0.png",
  "background": "https://xalaflix.men/upload/images/logo/XALAFLIX-noel.png",
  "resources": ["catalog", "meta", "stream"],
  "types": ["movie", "series"],
  "idPrefixes": ["xalaflix:"],
  "catalogs": [
    {
      "type": "movie",
      "id": "xalaflix_movies",
      "name": "Xalaflix Movies"
    },
    {
      "type": "series",
      "id": "xalaflix_series",
      "name": "Xalaflix Series"
    }
  ]
};

export function Manifest() {
  const [copied, setCopied] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState(false);
  const manifestUrl = `${window.location.origin}/manifest.json`;

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(MANIFEST_DATA, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(manifestUrl);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2000);
  };

  return (
    <section id="manifest" className="py-24 bg-secondary/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black tracking-tight mb-6">TECHNICAL <span className="text-primary">MANIFEST</span></h2>
            <p className="text-foreground/60 mb-8 leading-relaxed">
              For developers and power users, the manifest defines how Stremio interacts with our add-on. 
              Our V3 manifest is optimized for faster discovery and ultra-low latency resolving.
            </p>
            
            <div className="space-y-6 mb-8">
              {[
                { icon: <Cpu className="w-5 h-5" />, title: "Optimized Resolvers", desc: "Advanced stream discovery logic." },
                { icon: <Zap className="w-5 h-5" />, title: "Low Latency", desc: "Global CDN for manifest delivery." },
                { icon: <Globe className="w-5 h-5" />, title: "Multi-Language", desc: "Full support for international content." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 text-primary">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold">{item.title}</h4>
                    <p className="text-sm text-foreground/40">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 glass-card rounded-2xl border-white/5 bg-white/5">
              <h4 className="text-sm font-bold uppercase tracking-wider text-primary mb-4">Direct Manifest URL</h4>
              <div className="flex items-center gap-2 p-1 bg-black/20 rounded-lg border border-white/5">
                <div className="flex-1 px-3 truncate text-xs font-mono text-foreground/40">
                  {manifestUrl}
                </div>
                <Button 
                  size="sm" 
                  variant="ghost" 
                  onClick={handleCopyUrl}
                  className="h-8 gap-2 hover:bg-primary/10 hover:text-primary transition-all"
                >
                  {copiedUrl ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copiedUrl ? "Copied" : "Copy"}
                </Button>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000" />
            <div className="relative glass-card rounded-[2rem] overflow-hidden border-white/5 shadow-2xl">
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/5">
                <div className="flex items-center gap-2">
                  <FileJson className="w-5 h-5 text-primary" />
                  <span className="text-sm font-bold tracking-wider text-foreground/60">manifest.json</span>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-8 gap-2 hover:bg-primary/10 hover:text-primary transition-all"
                  onClick={handleCopy}
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copied ? "Copied" : "Copy JSON"}
                </Button>
              </div>
              
              <div className="p-8 overflow-x-auto font-mono text-sm leading-relaxed max-h-[500px] custom-scrollbar">
                <pre className="text-foreground/80">
                  <code>
                    <span className="text-primary">{`{`}</span>{`\n`}
                    {`  "id": `}<span className="text-accent">"com.xalaflix.enhanced"</span>,{`\n`}
                    {`  "version": `}<span className="text-accent">"2.0.0"</span>,{`\n`}
                    {`  "name": `}<span className="text-accent">"Xalaflix Enhanced"</span>,{`\n`}
                    {`  "resources": [`}
                    <span className="text-primary">"catalog"</span>, 
                    <span className="text-primary">"meta"</span>, 
                    <span className="text-primary">"stream"</span>
                    {`],\n`}
                    {`  "types": [`}
                    <span className="text-primary">"movie"</span>, 
                    <span className="text-primary">"series"</span>
                    {`],\n`}
                    {`  "catalogs": [\n`}
                    {`    {\n`}
                    {`      "type": `}<span className="text-accent">"movie"</span>,{`\n`}
                    {`      "id": `}<span className="text-accent">"xalaflix_movies"</span>,{`\n`}
                    {`      "name": `}<span className="text-accent">"Xalaflix Movies"</span>{`\n`}
                    {`    },\n`}
                    {`    {\n`}
                    {`      "type": `}<span className="text-accent">"series"</span>,{`\n`}
                    {`      "id": `}<span className="text-accent">"xalaflix_series"</span>,{`\n`}
                    {`      "name": `}<span className="text-accent">"Xalaflix Series"</span>{`\n`}
                    {`    }\n`}
                    {`  ]\n`}
                    <span className="text-primary">{`}`}</span>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
