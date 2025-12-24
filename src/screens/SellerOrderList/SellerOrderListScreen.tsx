/**
 * Seller Order List Screen - Pixel-perfect Figma implementation
 * Figma: node-id=52-1519
 * 
 * Using ONLY existing design system tokens from tokens.css
 */

import React, { useState } from 'react';
import { OrderListHeader } from './components/OrderListHeader';
import { OrderListSidebar } from './components/OrderListSidebar';
import { OrderListContent } from './components/OrderListContent';

export const SellerOrderListScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('recent');

  return (
    <div className="min-h-screen bg-bg-canvas">
      {/* Header (from Figma: node-id=50-346) */}
      <OrderListHeader />

      {/* Main Container (from Figma: node-id=52-1518) - 1440px width, 80px padding */}
      <div className="w-[1440px] mx-auto px-20 py-10">
        <div className="flex gap-10">
          {/* Sidebar (from Figma: node-id=52-1508) - 250px width */}
          <OrderListSidebar />

          {/* Content (from Figma: node-id=52-1149) - 990px width */}
          <OrderListContent
            activeTab={activeTab}
            onTabChange={setActiveTab}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />
        </div>
      </div>
    </div>
  );
};

