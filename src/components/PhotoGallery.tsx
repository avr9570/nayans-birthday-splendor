import { Card } from '@/components/ui/card';
import pippoAngry from '@/assets/pippo-angry.png';
import pippoSorry from '@/assets/pippo-sorry.png';
import pippoNormal from '@/assets/pippo-normal.png';
import modak from '@/assets/modak.png';

export const PhotoGallery = () => {
  const photos = [
    {
      src: pippoNormal,
      title: "Happy Pippo! 🥰",
      description: "Just like how happy I am with you!"
    },
    {
      src: modak,
      title: "Sweet Modak 🍥",
      description: "Sweet like our memories together!"
    },
    {
      src: pippoSorry,
      title: "Sorry Pippo 😅",
      description: "Me apologizing for sleeping at midnight..."
    },
    {
      src: pippoAngry,
      title: "Angry Pippo 😤",
      description: "You when I forgot to wish at 12 AM..."
    }
  ];

  return (
    <Card className="p-6 shadow-cute bg-card/90 backdrop-blur-sm border-2 border-primary/20">
      <h3 className="text-2xl font-bold text-gradient-love mb-6 text-center">
        🖼️ Our Cute Gallery 🖼️
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {photos.map((photo, index) => (
          <div 
            key={index}
            className="group relative overflow-hidden rounded-lg shadow-cute border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105"
          >
            <div className="aspect-square overflow-hidden bg-gradient-sky">
              <img 
                src={photo.src} 
                alt={photo.title}
                className="w-full h-full object-contain animate-float group-hover:scale-110 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              />
            </div>
            
            {/* Overlay with text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h4 className="text-white font-bold text-lg mb-1">{photo.title}</h4>
              <p className="text-white/90 text-sm">{photo.description}</p>
            </div>
            
            {/* Sparkle effect on hover */}
            <div className="absolute top-2 right-2 text-2xl animate-sparkle opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              ✨
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};