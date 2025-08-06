import Link from 'next/link';
export default function Header() {
  return (
    <>
      <h1 className="text-3xl md:text-4xl font-bold underline text-center mb-2">
        My Experience in ASTU
      </h1>
      <p className="text-center mb-4">
        <strong>
          By <Link href="/autor" className="text-blue-400 italic hover:underline">Adriyano Girma</Link>
        </strong>{' '}
        | <i>June 24, 2025</i>
      </p>
      <hr className="mb-6 border-gray-600" />
    </>
  );
}