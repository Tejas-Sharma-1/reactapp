'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ShoppingBag, Plus } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { CartItem } from '@/components/cart/CartItem';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export default function CartPage() {
  const { items, total, itemCount, clearCart } = useCart();
  const [isClearing, setIsClearing] = useState(false);

  const deliveryFee = 4.99;
  const serviceFee = 2.99;
  const totalWithFees = total + deliveryFee + serviceFee;

  const handleClearCart = async () => {
    setIsClearing(true);
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate loading
    clearCart();
    setIsClearing(false);
  };

  if (items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center py-12">
          <ShoppingBag className="h-16 w-16 mx-auto text-gray-400 dark:text-gray-500 mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Your cart is empty</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Looks like you haven't added any items to your cart yet.
          </p>
          <Link href="/menu">
            <Button className="bg-orange-500 hover:bg-orange-600">
              <Plus className="h-4 w-4 mr-2" />
              Browse Menu
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Your Cart</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            {itemCount} {itemCount === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>
        <Button
          variant="outline"
          onClick={handleClearCart}
          disabled={isClearing}
          className="text-red-600 dark:text-red-400 border-red-200 dark:border-red-800 hover:bg-red-50 dark:hover:bg-red-950"
        >
          {isClearing ? 'Clearing...' : 'Clear Cart'}
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {items.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 sticky top-24 transition-colors">
            <h3 className="text-lg font-semibold mb-4 dark:text-white">Order Summary</h3>
            
            <div className="space-y-3 mb-4">
              <div className="flex justify-between dark:text-gray-300">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between dark:text-gray-300">
                <span>Delivery Fee</span>
                <span>${deliveryFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between dark:text-gray-300">
                <span>Service Fee</span>
                <span>${serviceFee.toFixed(2)}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-semibold text-lg dark:text-white">
                <span>Total</span>
                <span>${totalWithFees.toFixed(2)}</span>
              </div>
            </div>

            <Link href="/checkout" className="w-full">
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                Proceed to Checkout
              </Button>
            </Link>

            <Link href="/menu" className="block mt-3">
              <Button variant="outline" className="w-full">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}