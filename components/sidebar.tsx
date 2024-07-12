export interface ArrowDesign {
    id: string;
    svg: string;
    category: Category;
}

// Sidebar.tsx
import React from 'react';
import { Category } from "@/lib/types";

interface SidebarProps {
    categories: readonly Category[];
    selectedCategory: Category;
    onCategorySelect: (category: Category) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ categories, selectedCategory, onCategorySelect }) => {
    return (
        <div className="min-w-48 bg-gray-100 p-4 h-screen overflow-y-auto sticky top-0">
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

export default Sidebar;