import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="flex h-screen flex-col items-center justify-center font-mono">
      <h3 className="text-9xl">404</h3>
      <h3 className="text-2xl">Halaman yang anda cari tidak ditemukan</h3>
      <Link href="/">
        <a className="mt-7 border border-black px-5 py-2 font-semibold hover:-translate-y-1">
          Back to Home
        </a>
      </Link>
    </div>
  );
}
