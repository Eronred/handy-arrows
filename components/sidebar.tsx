import React from 'react';
import { Category } from "@/lib/types";
import Link from 'next/link';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import Logo from './logo';
import { Contact, FileSignature, Mail } from 'lucide-react';

interface SidebarProps {
    categories: readonly Category[];
    selectedCategory: Category;
    onCategorySelect: (category: Category) => void;
}

const AppSidebar: React.FC<SidebarProps> = ({ categories, selectedCategory, onCategorySelect }) => {
    return (
        <Sidebar
            className='p-3 bg-sidebar '
        >
            <SidebarHeader
                className='flex flex-row justify-between items-center'
            >
                <Logo />
                <div className="flex items-center space-x-4">
                    <Link
                        target="_blank"
                        href="https://github.com/eronred/handy-arrows"
                    >
                        <img src="/github.svg" className="size-4 cursor-pointer" />
                    </Link>
                    <Link target="_blank" href="https://x.com/imeronn">
                        <img src="/x.svg" className="size-4 cursor-pointer" />
                    </Link>
                </div>
            </SidebarHeader>
            <SidebarContent
                className='mt-4'
            >
                {categories.map((category) => (
                    <div
                        key={category}
                        className={`flex w-full justify-between items-center cursor-pointer p-2 rounded ${selectedCategory === category ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
                        onClick={() => onCategorySelect(category)}
                    >
                        <span>{category}</span>
                    </div>
                ))}
            </SidebarContent>
            {/*Banner */}
            <SidebarFooter
            >
                <div
                    className='mt-2  rounded p-2 bg-white border border-gray-200'>
                    <div
                        className="text-left">
                        <div
                            className="flex items-center gap-2"
                        >
                            <p>React Native Components</p>
                        </div>
                        <p className="text-sm text-gray-600">
                            UI library for RN
                        </p>
                    </div>
                    <Link
                        href="https://reactnativecomponents.com/"
                        target="_blank"
                    >
                        <button
                            className="mt-4 w-full bg-blue-500 text-sm text-white rounded p-1">
                            Get Comps
                        </button>
                    </Link>
                </div>

                <div className="flex flex-row justify-between items-center space-x-4 text-sm mt-4">
                    <Link
                        target="_blank"
                        href="https://creativecommons.org/licenses/by/4.0"
                        className='cursor-pointer hover:underline flex flex-row items-center gap-1'
                    >
                        <FileSignature
                            className="size-4"
                        />
                        License
                    </Link>
                    <Link
                        target="_blank"
                        href="mailto:erencanarica0@gmail.com"
                        className='cursor-pointer hover:underline flex flex-row items-center gap-1'

                    >
                        <Mail
                            className="size-4"
                        />
                        Contact
                    </Link>
                </div>
            </SidebarFooter>
        </Sidebar >
    );
};

export default AppSidebar;
