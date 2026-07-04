'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { Navbar } from '@/components/Navbar';

interface Design {
  id: string;
  title: string;
  image_url: string;
}

export default function GalleryPage() {
  const [designs, setDesigns] = useState<Design[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDesigns() {
      const { data } = await supabase.from('designs').select('*');
      if (data) setDesigns(data);
      setLoading(false);
    }
    fetchDesigns();
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="px-8 py-12">
        <h2 className="text-3xl font-bold mb-8">Design Portfolio</h2>
        {loading ? (
          <p>Loading gallery...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {designs.map((design) => (
              <div key={design.id} className="group cursor-pointer">
                <div className="aspect-square bg-gray-100 mb-4 overflow-hidden">
                  <img src={design.image_url} alt={design.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="font-semibold">{design.title}</h3>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}