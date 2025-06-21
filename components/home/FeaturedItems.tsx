'use client';

import { useEffect, useState } from 'react';
import { FoodCard } from '@/components/food/FoodCard';
import { FoodItemSkeleton } from '@/components/ui/loading-skeleton';
import { foodItems } from '@/lib/data';
import { FoodItem } from '@/types';

export function FeaturedItems() {
  const [featuredItems, setFeaturedItems] = useState<FoodItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setFeaturedItems(foodItems.filter(item => item.featured));
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Featured Items</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover our chef's special selections, carefully crafted with the finest ingredients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading
            ? Array(6).fill(0).map((_, i) => <FoodItemSkeleton key={i} />)
            : featuredItems.map(item => (
                <FoodCard key={item.id} item={item} />
              ))}
        </div>
      </div>
    </section>
  );
}