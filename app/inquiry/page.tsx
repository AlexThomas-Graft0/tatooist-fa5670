'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { Navbar } from '@/components/Navbar';

export default function InquiryPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    const formData = new FormData(e.currentTarget);
    const { error } = await supabase.from('bookings').insert({
      customer_name: formData.get('name'),
      customer_email: formData.get('email'),
      details: formData.get('details'),
    });

    setStatus(error ? 'error' : 'success');
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="max-w-xl mx-auto px-8 py-12">
        <h2 className="text-3xl font-bold mb-8">Start your journey</h2>
        {status === 'success' ? (
          <div className="p-6 bg-green-50 text-green-800 rounded">Inquiry sent successfully. We will be in touch.</div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input name="name" placeholder="Full Name" required className="p-4 border border-gray-200 rounded" />
            <input name="email" type="email" placeholder="Email Address" required className="p-4 border border-gray-200 rounded" />
            <textarea name="details" placeholder="Project details" rows={4} className="p-4 border border-gray-200 rounded" />
            <button disabled={status === 'loading'} className="bg-blue-600 text-white p-4 rounded font-bold hover:bg-blue-700">
              {status === 'loading' ? 'Sending...' : 'Submit Inquiry'}
            </button>
          </form>
        )}
      </section>
    </main>
  );
}