'use client';

import Image from 'next/image';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '@/types';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm transition-colors">
      <Image
        src={item.image}
        alt={item.name}
        width={80}
        height={80}
        className="rounded-lg object-cover"
      />
      
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-gray-900 dark:text-white truncate">{item.name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 truncate">{item.description}</p>
        <p className="text-lg font-semibold text-gray-900 dark:text-white mt-1">
          ${item.price.toFixed(2)}
        </p>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className="h-8 w-8 p-0"
          >
            <Minus className="h-3 w-3" />
          </Button>
          <span className="font-medium w-8 text-center dark:text-white">{item.quantity}</span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="h-8 w-8 p-0"
          >
            <Plus className="h-3 w-3" />
          </Button>
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => removeFromCart(item.id)}
          className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 h-8 w-8 p-0"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}