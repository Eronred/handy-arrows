import React from 'react';
import { Category } from "@/lib/types";
import Link from 'next/link';

interface SidebarProps {
    categories: readonly Category[];
    selectedCategory: Category;
    onCategorySelect: (category: Category) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ categories, selectedCategory, onCategorySelect }) => {
    return (
        <div className="hidden sm:flex flex-col justify-between w-full border-r border-gray-100 bg-white h-full p-1">
            <div
                className="flex flex-col mt-16"
            >
                {categories.map((category) => (
                    <div
                        key={category}
                        className={`flex w-full justify-between items-center mb-2 cursor-pointer p-2 rounded ${selectedCategory === category ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
                        onClick={() => onCategorySelect(category)}
                    >
                        <span>{category}</span>
                    </div>
                ))}
            </div>
            {/*Banner */}
            <div className="mt-2 bg-white rounded shadow-lg p-2">
                <div
                    className="text-left mt-1">
                    <p>Nice Prompt</p>
                    <p className="text-sm text-gray-600">
                        Save, organize and share your prompts
                    </p>
                </div>
                <Link
                    href="https://niceprompt.app/"
                    target="_blank"
                >
                    <button
                        className="mt-4 w-full bg-blue-500 text-sm text-white rounded p-1">
                        Get Nice Prompt
                    </button>
                </Link>
            </div>
        </div >
    );
};

export default Sidebar;
