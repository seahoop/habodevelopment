import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import '@/styles/globals.css';
import AnimatedBackground from '@/components/ui/AnimatedBackground';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Add smooth scroll behavior
    if (typeof window !== 'undefined') {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <>
      <AnimatedBackground />
      <Component {...pageProps} />
    </>
  );
}

