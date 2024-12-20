'use client';

import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';

export function ProductHero() {
  return (
    <section className="relative h-[40vh] bg-cover bg-center flex items-center" 
             style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=2070)' }}>
      <div className="absolute inset-0 bg-gradient-to-r from-[#1e293b]/90 to-[#1e293b]/70" />
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold mb-4 text-white">
            Minicargador VOLVO MC110
          </h1>
          <p className="text-xl mb-6 text-gray-200">
            Modelo 2019 | 0 Horas | Ubicación: Quillota
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="bg-[#f97316] hover:bg-[#ea580c] text-white">
              Solicitar Cotización
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <FileText className="mr-2 h-5 w-5" />
              Descargar Ficha Técnica
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}