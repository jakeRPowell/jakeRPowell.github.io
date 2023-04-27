import { ReactNode } from 'react';
import Header from './Header';
import Footer from './footer';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="container py-4">{children}</main>
      <Footer />
    </>
  );
}
