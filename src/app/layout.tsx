import React from 'react';
import './globals.css';
import Header from '@/components/layout/header';
import QueryProvider from '@/components/query-provider';
import { Footer } from '@/components/layout/footer';

const App = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="font-inter min-h-screen">
      <QueryProvider>
        <Header />
        <main className="pt-10">
          <article className="container p-10">{children}</article>
        </main>
        <Footer />
      </QueryProvider>
    </div>
  );
};

export default App;
