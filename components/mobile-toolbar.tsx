import React from 'react';
import { Category } from "@/lib/types";

interface MobileToolbarProps {
    categories: readonly Category[];
    selectedCategory: Category;
    onCategorySelect: (category: Category) => void;
}

const MobileToolbar: React.FC<MobileToolbarProps> = ({ categories, selectedCategory, onCategorySelect }) => {
    return (
        <div className="flex flex-row items-center w-full p-4 h-20 overflow-x-auto overflow-y-hidden fixed top-15 bg-white border-b border-gray-200 sm:hidden">
            {categories.map((category) => (
                <div
                    key={category}
                    className={`flex justify-between items-center mb-2 cursor-pointer p-2 rounded ${selectedCategory === category ? 'bg-gray-200' : 'hover:bg-gray-200'}`}
                    onClick={() => onCategorySelect(category)}
                >
                    <span>{category}</span>
                </div>
            ))}
        </div>
    );
};

export default MobileToolbar;
