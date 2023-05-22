import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="layout flex min-h-screen flex-col">
      <Header />
      <main className="container flex-1 py-4">{children}</main>
      <Footer />
    </div>
  );
}
