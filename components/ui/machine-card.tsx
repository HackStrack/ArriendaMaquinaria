'use client';

import { Button } from './button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from './card';

interface MachineCardProps {
  image: string;
  title: string;
  price: string;
  onQuote: () => void;
}

export function MachineCard({
  image,
  title,
  price,
  onQuote,
}: MachineCardProps) {
  return (
    <Card className="w-full h-full transform transition-all duration-300 hover:scale-105">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
          />
        </div>
        <div className="p-6">
          {/* Altura fija y manejo de texto largo */}
          <CardTitle className="text-[#1e293b] text-xl h-14 overflow-hidden">
            {title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-xl font-bold text-[#f97316]">{price}</p>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={onQuote} 
          className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white transition-colors"
        >
          Solicitar Cotización
        </Button>
      </CardFooter>
    </Card>
  );
}
