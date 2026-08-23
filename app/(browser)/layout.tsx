import React from 'react';
import { BrowseNavbar } from '@/components/browse/browse-navbar';
import { BrowseFooter } from '@/components/browse/browse-footer';

interface BrowseLayoutProps {
  children: React.ReactNode;
}

export default function BrowseLayout({ children }: BrowseLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-foreground selection:text-background">
      <BrowseNavbar />
      
      {/* Asosiy kontent butun eni bilan o'tadi */}
      <div className="flex-1 w-full">
        {children}
      </div>

      <BrowseFooter />
    </div>
  );
}