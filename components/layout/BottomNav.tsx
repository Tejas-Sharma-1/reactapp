'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Menu, ShoppingCart, User } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Badge } from '@/components/ui/badge';

export function BottomNav() {
  const pathname = usePathname();
  const { itemCount } = useCart();

  const navItems = [
    { href: '/', icon: Home, label: 'Home' },
    { href: '/menu', icon: Menu, label: 'Menu' },
    { href: '/cart', icon: ShoppingCart, label: 'Cart', badge: itemCount },
    { href: '/profile', icon: User, label: 'Profile' },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 z-50 transition-colors">
      <div className="flex items-center justify-around py-2">
        {navItems.map(({ href, icon: Icon, label, badge }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center justify-center py-2 px-3 min-w-0 relative transition-colors ${
                isActive ? 'text-orange-600 dark:text-orange-400' : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              <div className="relative">
                <Icon className="h-5 w-5" />
                {badge && badge > 0 && (
                  <Badge 
                    variant="destructive" 
                    className="absolute -top-2 -right-2 h-4 w-4 rounded-full p-0 flex items-center justify-center text-xs"
                  >
                    {badge > 9 ? '9+' : badge}
                  </Badge>
                )}
              </div>
              <span className="text-xs mt-1 font-medium">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}