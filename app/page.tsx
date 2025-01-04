"use client";
import React, { useState, useMemo } from "react";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import ResourceCard from "@/components/resource-card";
import {
  designCollections,
  createReactComponentString,
  createVueComponentString,
  fetchSvgContent
} from "@/utils";
import { useToast } from "@/components/ui/use-toast";
import { Category, ResourceCollection } from '@/lib/types';
import MobileToolbar from "@/components/mobile-toolbar";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AppSidebar from "@/components/sidebar";
const categories: readonly Category[] = ["Arrows", "Doodles", "Infographic", "Illustrations"] as const;

const Home: React.FC = () => {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState<Category>("Arrows");
  const isSmallDevice = useMediaQuery("only screen and (max-width: 768px)");

  const copyToClipboard = async (path: string, type: "svg" | "react" | "vue") => {
    try {
      const svgContent = await fetchSvgContent(path);
      const fileName = path.split('/').pop()?.split('.')[0] || '';

      const textToCopy =
        type === "react" ? createReactComponentString(svgContent, fileName) :
          type === "vue" ? createVueComponentString(svgContent, fileName) :
            svgContent;

      await navigator.clipboard.writeText(textToCopy);
      toast({
        title: "Copied",
        description: `${type === "react" ? "React component" :
          type === "vue" ? "Vue component" :
            "SVG"
          } copied to clipboard`,
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
    <SidebarProvider

      className="min-h-screen bg-white text-black">
      {
        isSmallDevice && (
          <MobileToolbar
            categories={categories}
            selectedCategory={selectedCategory}
            onCategorySelect={setSelectedCategory}
          />
        )
      }
      <AppSidebar
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />

      <SidebarInset
        className="flex-grow p-4  sm:mt-0 sm:p-8 mt-20 ">
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
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Home;
