'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { FoodCard } from '@/components/food/FoodCard';
import { CategoryCard } from '@/components/food/CategoryCard';
import { FoodItemSkeleton } from '@/components/ui/loading-skeleton';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter } from 'lucide-react';
import { foodItems, foodCategories } from '@/lib/data';
import { FoodItem } from '@/types';

export default function MenuPage() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [filteredItems, setFilteredItems] = useState<FoodItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || 'all');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      let items = foodItems;
      
      // Filter by category
      if (selectedCategory !== 'all') {
        items = items.filter(item => item.category === selectedCategory);
      }
      
      // Filter by search query
      if (searchQuery) {
        items = items.filter(item =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }
      
      setFilteredItems(items);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [selectedCategory, searchQuery]);

  const categories = [
    { id: 'all', name: 'All', icon: '🍽️' },
    ...foodCategories,
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Menu</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Discover our delicious selection of carefully crafted meals
        </p>
        
        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Search for dishes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 w-full md:w-96"
          />
        </div>

        {/* Category Filters */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-8">
          {categories.map(category => (
            <CategoryCard
              key={category.id}
              category={category}
              isActive={selectedCategory === category.id}
              onClick={() => setSelectedCategory(category.id)}
            />
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="mb-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {loading ? 'Loading...' : `${filteredItems.length} items found`}
        </p>
      </div>

      {/* Food Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {loading
          ? Array(8).fill(0).map((_, i) => <FoodItemSkeleton key={i} />)
          : filteredItems.map(item => (
              <FoodCard key={item.id} item={item} />
            ))}
      </div>

      {!loading && filteredItems.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-500 dark:text-gray-400 mb-4">
            <Filter className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <h3 className="text-lg font-medium mb-2">No items found</h3>
            <p>Try adjusting your search or filter to find what you're looking for.</p>
          </div>
          <Button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            variant="outline"
            className="mt-4"
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
}