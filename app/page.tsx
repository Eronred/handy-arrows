"use client";
import React, { useState, useMemo } from "react";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import ResourceCard from "@/components/resource-card";
import { designCollections, createReactComponentString, fetchSvgContent } from "@/utils";
import { useToast } from "@/components/ui/use-toast";
import { Category, ResourceCollection } from '@/lib/types';
import MobileToolbar from "@/components/mobile-toolbar";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const categories: readonly Category[] = ["Arrows", "Doodles", "Infographic"] as const;

const Home: React.FC = () => {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState<Category>("Arrows");
  const isSmallDevice = useMediaQuery("only screen and (max-width: 768px)");

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

  const filteredResources = useMemo(() => {
    return designCollections.filter((resource: ResourceCollection) => resource.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <div className="h-full flex flex-col sm:flex-row">
        {
          isSmallDevice && (
            <MobileToolbar
              categories={categories}
              selectedCategory={selectedCategory}
              onCategorySelect={setSelectedCategory}
            />
          )
        }
        <div className="hidden sm:flex w-[220px] p-4 h-full fixed top-0 left-0 bg-white">
          <Sidebar
            categories={categories}
            selectedCategory={selectedCategory}
            onCategorySelect={setSelectedCategory}
          />
        </div>

        <main className="flex-grow p-4 mt-20 sm:mt-0 sm:p-8 sm:ml-48 ">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {filteredResources.map((resource: ResourceCollection) => (
              <ResourceCard
                key={resource.id}
                resource={resource}
                onCopy={(type) => copyToClipboard(resource.svg, type)}
                onDownload={() => downloadSvg(resource.svg)}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
