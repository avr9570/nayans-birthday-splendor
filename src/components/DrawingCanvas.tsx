import { useRef, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export const DrawingCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentColor, setCurrentColor] = useState('#FF69B4');

  const colors = [
    '#FF69B4', // Pink
    '#9370DB', // Purple  
    '#FFD700', // Gold
    '#87CEEB', // Sky Blue
    '#98FB98', // Light Green
    '#FF6347', // Tomato
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    }
  }, []);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    draw(e);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';
      ctx.strokeStyle = currentColor;
      
      ctx.lineTo(x, y);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x, y);
    }
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    const ctx = canvasRef.current?.getContext('2d');
    if (ctx) {
      ctx.beginPath();
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    }
  };

  return (
    <Card className="p-6 shadow-cute bg-card/90 backdrop-blur-sm border-2 border-primary/20">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gradient-love mb-2">🎨 Draw Something for Nayan! 🎨</h3>
        <p className="text-foreground">Create a beautiful drawing to show your love!</p>
      </div>

      {/* Color Palette */}
      <div className="flex justify-center gap-2 mb-4">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => setCurrentColor(color)}
            className={`w-8 h-8 rounded-full border-2 transition-transform hover:scale-110 ${
              currentColor === color ? 'border-primary scale-110' : 'border-gray-300'
            }`}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      {/* Canvas */}
      <div className="flex justify-center mb-4">
        <canvas
          ref={canvasRef}
          width={400}
          height={300}
          className="border-2 border-primary/30 rounded-lg shadow-cute cursor-crosshair bg-white"
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
        />
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-4">
        <Button
          onClick={clearCanvas}
          variant="outline"
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full"
        >
          Clear Canvas 🗑️
        </Button>
      </div>
    </Card>
  );
};