import Header from '@/components/Header';
import Hero from '@/components/Hero';
import DetailingSection from '@/components/DetailingSection';
import FutureServices from '@/components/FutureServices';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <DetailingSection />
      <FutureServices />
      <Footer />
    </main>
  );
}
