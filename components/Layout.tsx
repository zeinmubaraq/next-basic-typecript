import { ReactNode } from 'react';
import Header from './Header';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <div className="font-mono lg:mx-auto lg:w-3/5">
      <Header />
      <main className="mt-7">{children}</main>
    </div>
  );
}
