import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-evenly border-b pt-7 pb-5 uppercase">
      <Link href="/">
        <a className="hover:text-pink-500">Home</a>
      </Link>
      <Link href="/blog">
        <a className="hover:text-pink-500">Blog</a>
      </Link>
      <Link href="/users">
        <a className="hover:text-pink-500">User</a>
      </Link>
    </header>
  );
}
