import { Hero } from '@/components/home/Hero';
import { Categories } from '@/components/home/Categories';
import { FeaturedItems } from '@/components/home/FeaturedItems';

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedItems />
    </>
  );
}