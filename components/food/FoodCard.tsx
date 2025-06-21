'use client';

import Image from 'next/image';
import { Star, Plus } from 'lucide-react';
import { FoodItem } from '@/types';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface FoodCardProps {
  item: FoodItem;
}

export function FoodCard({ item }: FoodCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden group">
      <div className="relative">
        <Image
          src={item.image}
          alt={item.name}
          width={400}
          height={200}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          {item.featured && (
            <Badge className="bg-orange-500 hover:bg-orange-600">
              Featured
            </Badge>
          )}
          {item.popular && (
            <Badge className="bg-green-500 hover:bg-green-600">
              Popular
            </Badge>
          )}
        </div>
        <div className="absolute top-3 right-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center text-sm font-medium">
          <Star className="h-3 w-3 text-yellow-400 mr-1" fill="currentColor" />
          4.5
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-1 line-clamp-1">{item.name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">{item.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900 dark:text-white">
            ${item.price.toFixed(2)}
          </span>
          <Button
            onClick={() => addToCart(item)}
            size="sm"
            className="bg-orange-500 hover:bg-orange-600 text-white"
          >
            <Plus className="h-4 w-4 mr-1" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
}