import React from 'react';
import ResourceCard from "@/components/arrow-card";
import { ArrowDesign } from '@/utils';

interface TabContentProps {
    arrows: ArrowDesign[];
    onCopy: (path: string, type: "svg" | "react") => void;
    onDownload: (path: string) => void;
}

const TabContent: React.FC<TabContentProps> = ({ arrows, onCopy, onDownload }) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {arrows.map((arrow) => (
                <ResourceCard
                    key={arrow.id}
                    arrow={arrow}
                    onCopy={(type) => onCopy(arrow.svg, type)}
                    onDownload={() => onDownload(arrow.svg)}
                />
            ))}
        </div>
    );
};

export default TabContent;