import React from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface IResource {
    id: string;
    svg: string;
}

interface ResourceCardProps {
    resource: IResource;
    onCopy: (type: 'svg' | 'react') => void;
    onDownload: () => void;
}

const ResourceCard: React.FC<ResourceCardProps> = ({
    resource,
    onCopy,
    onDownload
}) => {
    return (
        <div key={resource.id}
            className="border border-gray-100 p-8 rounded-md shadow-sm">
            <div className="w-full aspect-square flex items-center justify-center ">
                <img
                    src={resource.svg}
                    alt={resource.id}
                    className='w-full h-full object-contain'
                />
            </div>
            <div className="mt-4 flex justify-center gap-2">
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <button className="text-gray-600 hover:text-gray-800 flex items-center justify-center">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem onClick={() => onCopy('react')}>
                            React Comp.
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => onCopy('svg')}>
                            SVG
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <button
                    onClick={onDownload}
                    className="text-gray-600 hover:text-gray-800"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default ResourceCard;