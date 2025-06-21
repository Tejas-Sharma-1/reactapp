import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-orange-500 to-red-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Delicious Food
            <br />
            <span className="text-yellow-300">Delivered Fast</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-orange-100">
            Order your favorite meals from our restaurant and get them delivered to your doorstep in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/menu">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 w-full sm:w-auto">
                Order Now
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 w-full sm:w-auto">
              View Menu
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}