'use client';

import { ProductHero } from '@/components/sections/product-hero';
import { ProductDetails } from '@/components/sections/product-details';
import { ProductSpecs } from '@/components/sections/product-specs';
import { ContactForm } from '@/components/sections/contact-form';
import { Navbar } from '@/components/ui/navbar';

export default function ProductPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <ProductHero />
        <ProductDetails />
        <ProductSpecs />
        <ContactForm />
      </main>
    </>
  );
}