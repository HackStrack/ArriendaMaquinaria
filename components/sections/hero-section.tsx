'use client';

import { Button } from '@/components/ui/button';
import { services } from '@/data/services';

export function HeroSection() {
  return (
    <section className="relative h-[50vh] bg-cover bg-center flex items-center" 
             style={{ backgroundImage: 'url(https://salfamaquinaria.cl/wp-content/uploads/2024/06/Altas-temperaturas-min.png)' }}>
      <div className="absolute inset-0 bg-gradient-to-r from-[#1e293b]/90 to-[#1e293b]/70" />
      <div className="relative z-10 container mx-auto px-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-4xl font-bold mb-4 text-white">
              Maquinaria Pesada de Primera Calidad
            </h1>
            <p className="text-lg md:text-1xl mb-6 text-gray-200">
              Soluciones completas en venta y arriendo de maquinaria
            </p>
            <Button size="lg" className="bg-[#f97316] hover:bg-[#ea580c] text-white">
              Conoce Nuestros Equipos
            </Button>
          </div>
          
          <div className="relative">
            <div className="absolute -left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-400 to-transparent" />
            <div className="grid grid-cols-1 gap-4">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-white mb-1">{service.title}</h3>
                  <p className="text-sm text-gray-200">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}