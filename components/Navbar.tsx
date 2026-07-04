import Link from 'next/link';

export const Navbar = () => (
  <nav className="flex justify-between items-center py-6 px-8 border-b border-gray-100">
    <Link href="/" className="font-bold text-2xl tracking-tighter">STUDIO</Link>
    <div className="flex gap-8 text-sm font-medium">
      <Link href="/gallery" className="hover:text-blue-600 transition">Gallery</Link>
      <Link href="/inquiry" className="hover:text-blue-600 transition">Inquiry</Link>
    </div>
  </nav>
);