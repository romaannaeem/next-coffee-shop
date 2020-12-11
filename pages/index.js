import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';

export default function Home() {
  return (
    <div>
      <Header home />
      <Hero />
      <ProductGrid style={{ padding: '4% 0%' }} />
    </div>
  );
}
