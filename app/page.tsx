"use client";
import React from "react";
import ArrowCard from "@/components/arrow-card";
import Header from "@/components/header";
import { arrows, createReactComponentString, fetchSvgContent } from "@/utils";
import { useToast } from "@/components/ui/use-toast";

const Home: React.FC = () => {
  const { toast } = useToast();

  const copyToClipboard = async (path: string, type: "svg" | "react") => {
    try {
      const svgContent = await fetchSvgContent(path);
      const textToCopy = type === "react"
        ? createReactComponentString(svgContent)
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

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {arrows.map((arrow) => (
            <ArrowCard
              key={arrow.id}
              arrow={arrow}
              onCopy={(type) => copyToClipboard(arrow.svg, type)}
              onDownload={() => downloadSvg(arrow.svg)}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;