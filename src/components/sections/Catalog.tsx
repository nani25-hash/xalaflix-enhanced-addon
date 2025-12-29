import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Play, Star, Clock, Plus } from 'lucide-react';
import { toast } from 'sonner';

const MOCK_CONTENT = [
  {
    title: "Inception",
    rating: 8.8,
    year: 2010,
    duration: "2h 28m",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&q=80&w=400",
    quality: "4K",
    category: "Movies"
  },
  {
    title: "Interstellar",
    rating: 8.7,
    year: 2014,
    duration: "2h 49m",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=400",
    quality: "4K",
    category: "Movies"
  },
  {
    title: "The Dark Knight",
    rating: 9.0,
    year: 2008,
    duration: "2h 32m",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=400",
    quality: "4K",
    category: "Movies"
  },
  {
    title: "Pulp Fiction",
    rating: 8.9,
    year: 1994,
    duration: "2h 34m",
    image: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?auto=format&fit=crop&q=80&w=400",
    quality: "HD",
    category: "Movies"
  },
  {
    title: "Stranger Things",
    rating: 8.7,
    year: 2016,
    duration: "S1-S4",
    image: "https://images.unsplash.com/photo-1533488765986-dfa2a9939ca1?auto=format&fit=crop&q=80&w=400",
    quality: "4K",
    category: "Series"
  },
  {
    title: "Breaking Bad",
    rating: 9.5,
    year: 2008,
    duration: "S1-S5",
    image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&q=80&w=400",
    quality: "4K",
    category: "Series"
  },
  {
    title: "The Bear",
    rating: 8.6,
    year: 2022,
    duration: "S1-S2",
    image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&q=80&w=400",
    quality: "4K",
    category: "Series"
  },
  {
    title: "Succession",
    rating: 8.9,
    year: 2018,
    duration: "S1-S4",
    image: "https://images.unsplash.com/photo-1542204172-55af30e4f07d?auto=format&fit=crop&q=80&w=400",
    quality: "4K",
    category: "Series"
  }
];

export function Catalog() {
  const [filter, setFilter] = React.useState('All');

  const filteredContent = React.useMemo(() => {
    if (filter === 'All') return MOCK_CONTENT;
    if (filter === 'Recent') return [...MOCK_CONTENT].sort((a, b) => b.year - a.year).slice(0, 4);
    return MOCK_CONTENT.filter(item => item.category === filter);
  }, [filter]);

  return (
    <section id="catalog" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-black tracking-tight mb-4 uppercase">Catalog <span className="text-primary">Explorer</span></h2>
            <p className="text-foreground/60 max-w-xl">
              Preview the vast collection of content provided by Xalaflix. 
              Our indexers pull metadata from multiple sources for the best experience.
            </p>
          </div>
          <div className="flex gap-2">
            {['All', 'Movies', 'Series', 'Recent'].map((cat) => (
              <Badge 
                key={cat}
                onClick={() => setFilter(cat)}
                variant={filter === cat ? "default" : "outline"}
                className={`cursor-pointer transition-all ${
                  filter === cat 
                  ? "bg-primary text-white hover:bg-primary/90" 
                  : "border-white/10 text-foreground/60 hover:text-white hover:border-white/20"
                }`}
              >
                {cat}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 min-h-[800px]">
          {filteredContent.map((movie, i) => (
            <div key={`${movie.title}-${i}`} className="group relative animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="aspect-[2/3] rounded-2xl overflow-hidden relative shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] group-hover:-translate-y-2">
                <img 
                  src={movie.image} 
                  alt={movie.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-white border-none font-bold backdrop-blur-md bg-opacity-80">
                    {movie.quality}
                  </Badge>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div 
                    onClick={() => toast.info(`This is a preview of ${movie.title}. Install the add-on to watch!`)}
                    className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-2xl shadow-primary/40 transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100 cursor-pointer"
                  >
                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1 text-primary">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-bold">{movie.rating}</span>
                  </div>
                  <span className="text-xs text-foreground/20 font-bold">•</span>
                  <span className="text-sm text-foreground/40">{movie.year}</span>
                </div>
                <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors line-clamp-1">{movie.title}</h3>
                <div className="flex items-center gap-2 mt-2 text-foreground/40 text-sm">
                  <Clock className="w-4 h-4" />
                  <span>{movie.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button variant="outline" className="rounded-full px-12 h-14 border-white/10 hover:bg-white/5 font-bold text-lg">
            <Plus className="w-5 h-5 mr-2" />
            Load More Content
          </Button>
        </div>
      </div>
    </section>
  );
}
