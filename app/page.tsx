import { Navbar } from '@/components/Navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <section className="px-8 py-24 max-w-4xl">
        <h1 className="text-6xl font-bold mb-6">Artistry etched in ink.</h1>
        <p className="text-xl text-gray-600 mb-10 max-w-lg">
          A premium, appointment-only studio bridging the gap between fine art and body modification.
        </p>
        <div className="flex gap-4">
          <Link href="/gallery" className="bg-blue-600 text-white px-8 py-4 rounded-full font-medium">View Gallery</Link>
          <Link href="/inquiry" className="border border-gray-200 px-8 py-4 rounded-full font-medium">Book Consultation</Link>
        </div>
      </section>
    </main>
  );
}