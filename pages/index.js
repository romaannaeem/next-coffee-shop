import { ToastContainer } from 'react-toastify';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';

export default function Home() {
  return (
    <div>
      <Header home />
      <Hero />
      <h2 style={{ textAlign: 'center', paddingTop: '2%' }}>
        Featured Products
      </h2>
      <ProductGrid style={{ padding: '1% 0% 6%' }} />
      <ToastContainer />
    </div>
  );
}
