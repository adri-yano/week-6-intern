import Image from 'next/image';
import Link from 'next/link';
import meinastu from '../public/meinastu.jpg'; 

export default function Autor() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
      <Image
        src={meinastu}
        alt="Meinastu"
        width={250}
        height={250}
        className="rounded-full shadow-lg mb-4"
      />

      <p className="text-center text-lg mb-6 max-w-lg">
        Hi, I’m Adriyano Girma — a passionate software engineering student at ASTU who enjoys building projects and sharing experiences.
      </p>

      <Link href="/" className="text-blue-500 hover:underline text-lg">
        ← Back to Home
      </Link>
    </main>
  );
}
  
