'use client';

import { Card } from '@/components/ui/card';
import { Clock, MapPin, Calendar, Gauge } from 'lucide-react';

export function ProductDetails() {
  return (
    <section className="py-16 bg-[#f8fafc]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=2070" 
              alt="Minicargador VOLVO MC110" 
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#1e293b]">$2.200.000 mensual</h2>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4">
                <Clock className="h-6 w-6 text-[#f97316] mb-2" />
                <h3 className="font-semibold">Horas de Uso</h3>
                <p>0 horas</p>
              </Card>
              <Card className="p-4">
                <MapPin className="h-6 w-6 text-[#f97316] mb-2" />
                <h3 className="font-semibold">Ubicación</h3>
                <p>Quillota</p>
              </Card>
              <Card className="p-4">
                <Calendar className="h-6 w-6 text-[#f97316] mb-2" />
                <h3 className="font-semibold">Año</h3>
                <p>2019</p>
              </Card>
              <Card className="p-4">
                <Gauge className="h-6 w-6 text-[#f97316] mb-2" />
                <h3 className="font-semibold">Kilometraje</h3>
                <p>0 kms</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}