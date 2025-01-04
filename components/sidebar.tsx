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
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.07386 1.59051L7.5939 3.65584V12.1085C5.93497 10.4018 5.07381 8.4939 5.07382 6.65892L5.07386 1.59051Z" fill="#171717" />
                                <path d="M8.73952 13.1513V4.59474L11.2597 6.66022V15.2168L8.73952 13.1513Z" fill="#171717" />
                                <path d="M12.4054 16.146V7.66123C14.2145 9.42549 15.1553 11.4231 15.1553 13.341L15.1553 18.4094L13.6135 17.1458L12.4054 16.146Z" fill="#171717" />
                                <path d="M16.2648 19.165C16.2878 19.0939 16.3009 19.0164 16.3009 18.933L16.3009 13.341C16.3009 10.6997 14.8229 8.09922 12.2832 6.01779L12.0008 5.78633C12.6632 2.94865 15.209 0.834961 18.2485 0.834961C18.7546 0.834961 19.165 1.24529 19.165 1.75146V17.332C19.165 18.3443 18.3443 19.165 17.332 19.165H16.2648Z" fill="#171717" />
                                <path d="M7.98295 14.0125C7.27643 16.9678 4.61778 19.165 1.44596 19.165C1.10851 19.165 0.834961 18.8914 0.834961 18.554V2.66796C0.834961 1.65562 1.65562 0.834961 2.66796 0.834961H3.96442C3.94143 0.905994 3.92824 0.983505 3.92824 1.06687L3.9282 6.65891C3.92817 9.30025 5.40626 11.9007 7.946 13.9822L7.98295 14.0125Z" fill="#171717" />
                            </svg>
                            <p>Nice Prompt</p>
                        </div>
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
