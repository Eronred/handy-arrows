"use client";
import React, { useState, useMemo } from "react";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import ResourceCard from "@/components/arrow-card";
import { designCollections, createReactComponentString, fetchSvgContent } from "@/utils";
import { useToast } from "@/components/ui/use-toast";
import { Category, ArrowDesign } from '@/types';

const categories: readonly Category[] = ["Arrows", "Doodles", "Infographic"] as const;

const Home: React.FC = () => {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");

  const copyToClipboard = async (path: string, type: "svg" | "react") => {
    try {
      const svgContent = await fetchSvgContent(path);
      const textToCopy = type === "react"
        ? createReactComponentString(svgContent, path.split('/').pop()?.split('.')[0] || '')
        : svgContent;

      await navigator.clipboard.writeText(textToCopy);
      toast({
        title: "Copied",
        description: `${type === "react" ? "React component" : "SVG"} copied to clipboard`,
      });
    } catch (err) {
      console.error('Failed to copy: ', err);
      toast({
        variant: "destructive",
        description: "Failed to copy to clipboard",
      });
    }
  };

  const downloadSvg = async (path: string) => {
    try {
      const svgContent = await fetchSvgContent(path);
      const blob = new Blob([svgContent], { type: "image/svg+xml" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = path.split('/').pop() || 'download.svg';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Failed to download: ', err);
      toast({
        variant: "destructive",
        description: "Failed to download SVG",
      });
    }
  };

  const filteredArrows = useMemo(() => {
    if (selectedCategory === "All") return designCollections;
    return designCollections.filter(arrow => arrow.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className=" min-h-screen bg-white text-black">
      <Header />
      <div className="flex">
        <Sidebar
          categories={categories}
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
        />
        <main className="flex-grow p-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {filteredArrows.map((arrow: ArrowDesign) => (
              <ResourceCard
                key={arrow.id}
                arrow={arrow}
                onCopy={(type) => copyToClipboard(arrow.svg, type)}
                onDownload={() => downloadSvg(arrow.svg)}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;