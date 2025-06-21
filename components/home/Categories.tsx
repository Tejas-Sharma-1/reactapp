'use client';

import { CategoryCard } from '@/components/food/CategoryCard';
import { foodCategories } from '@/lib/data';
import Link from 'next/link';

export function Categories() {
  return (
    <section className="py-12 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Browse Categories</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Explore our diverse range of delicious food categories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {foodCategories.map(category => (
            <Link key={category.id} href={`/menu?category=${category.id}`}>
              <CategoryCard category={category} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}