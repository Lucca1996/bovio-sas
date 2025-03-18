import React from 'react';
import type { Category, Style } from '@/payload-types';

interface FiltersControlCategoryProps {
  categories: Category[];
  styles: Style[];
  onCategoryChange: (category: string | null) => void;
  onStyleChange: (style: string | null) => void;
  selectedCategory: string | null;
  selectedStyle: string | null;
}

export const FiltersControlCategory: React.FC<FiltersControlCategoryProps> = ({
  categories,
  styles,
  onCategoryChange,
  onStyleChange,
  selectedCategory,
  selectedStyle,
}) => {
  return (
    <div className="flex flex-wrap gap-4">
      <div className="flex items-center">
        <label htmlFor="category" className="mr-2">
          Categoría:
        </label>
        <select
          id="category"
          className="border border-gray-300 rounded-md px-3 py-2"
          value={selectedCategory || 'all'}
          onChange={(e) => onCategoryChange(e.target.value === 'all' ? null : e.target.value)}
        >
          <option value="all">Todas</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex items-center">
        <label htmlFor="style" className="mr-2">
          Estilo:
        </label>
        <select
          id="style"
          className="border border-gray-300 rounded-md px-3 py-2"
          value={selectedStyle || 'all'}
          onChange={(e) => onStyleChange(e.target.value === 'all' ? null : e.target.value)}
        >
          <option value="all">Todos</option>
          {styles.map((style) => (
            <option key={style.id} value={style.id}>
              {style.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
