interface CategoryCardProps {
  category: {
    id: string;
    name: string;
    icon: string;
  };
  isActive?: boolean;
  onClick?: () => void;
}

export function CategoryCard({ category, isActive, onClick }: CategoryCardProps) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center p-4 rounded-lg transition-all duration-200 ${
        isActive
          ? 'bg-orange-500 text-white shadow-lg scale-105'
          : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:shadow-md'
      }`}
    >
      <div className="text-2xl mb-2">{category.icon}</div>
      <span className="text-sm font-medium">{category.name}</span>
    </button>
  );
}