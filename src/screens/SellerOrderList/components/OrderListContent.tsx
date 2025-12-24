/**
 * Order List Content - Pixel-perfect from Figma
 * Figma: node-id=52-1149
 * 
 * Width: 990px
 * Contains: Page title, Tabs, Filters, Sort, Order cards list
 */

import React from 'react';
import { OrderCard } from '../../../components/OrderCard';

// Figma asset URLs
const imgSearch = "https://www.figma.com/api/mcp/asset/bd55370c-44f9-48dc-8cec-33865e9304ef";
const imgCalendar = "https://www.figma.com/api/mcp/asset/52d20e84-a9f3-458c-bef0-ef2d4cf94759";
const imgFilter = "https://www.figma.com/api/mcp/asset/c801c8d1-0891-451d-b083-39fe5697d11d";
const imgDropdown = "https://www.figma.com/api/mcp/asset/157e2028-84c9-438f-bfd8-b6b2c03f0b59";

interface OrderListContentProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
}

export const OrderListContent: React.FC<OrderListContentProps> = ({
  activeTab,
  onTabChange,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
}) => {
  const tabs = [
    { id: 'all', label: 'Tất cả' },
    { id: 'pending', label: 'Chờ xác nhận' },
    { id: 'pickup', label: 'Chờ giao hàng' },
    { id: 'processing', label: 'Đang xử lý' },
    { id: 'review', label: 'Đánh giá' },
    { id: 'complaint', label: 'Khiếu nại' },
    { id: 'cancelled', label: 'Đơn bị huỷ' },
    { id: 'completed', label: 'Hoàn thành' },
  ];

  // Mock data for 6 orders
  const orders = Array(6).fill(null).map((_, i) => ({
    id: `order-${i + 1}`,
  }));

  return (
    <div className="w-[990px] flex-shrink-0 flex flex-col gap-5">
      {/* Page Title (height: 60px with padding) */}
      <div className="bg-bg-surface rounded-md px-5 py-4">
        <div className="h-7">
          <p className="text-h4-bold text-content-neutral-strong">Đơn bán</p>
        </div>
      </div>

      {/* Tabs + Filters Card */}
      <div className="bg-bg-surface rounded-md p-5 flex flex-col gap-6">
        {/* Tabs (border-bottom) */}
        <div className="border-b border-border-surface flex items-center gap-4 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`
                flex flex-col items-center p-2.5
                ${activeTab === tab.id ? 'border-b border-border-selected-orange' : ''}
              `}
            >
              <p
                className={`
                  text-body-medium whitespace-nowrap text-center
                  ${activeTab === tab.id ? 'text-content-selected-orange' : 'text-content-neutral'}
                `}
              >
                {tab.label}
              </p>
            </button>
          ))}
        </div>

        {/* Filters Row */}
        <div className="flex flex-wrap items-center justify-between gap-1.5">
          {/* Left: Search + Date */}
          <div className="flex flex-wrap items-center gap-4 overflow-hidden min-w-[516px]">
            {/* Search */}
            <div className="flex-1 min-w-[250px] border border-border-surface rounded-full flex items-center justify-between p-2.5">
              <input
                type="text"
                placeholder="Tìm trên Oreka"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="text-body-regular text-content-neutral-strong bg-transparent border-none outline-none flex-1"
              />
              <div className="w-5 h-5 flex-shrink-0">
                <img src={imgSearch} alt="Search" className="w-full h-full" />
              </div>
            </div>

            {/* Date picker */}
            <div className="flex-1 min-w-[250px] border border-border-surface rounded-full flex items-center justify-between p-2.5">
              <p className="text-body-regular text-content-neutral-strong">Ngày đặt hàng</p>
              <div className="w-5 h-5 flex items-center justify-center py-1 px-px">
                <div className="w-[17.5px] h-3.5">
                  <img src={imgCalendar} alt="Calendar" className="w-full h-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Filter button */}
          <div className="bg-bg-tertiary rounded-full flex items-center justify-center px-8 py-2.5">
            <div className="w-5 h-5">
              <img src={imgFilter} alt="Filter" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Count + Sort Row (height: 40px) */}
      <div className="flex items-center justify-between">
        {/* Left: Product count */}
        <div className="h-10 flex items-center">
          <p className="text-body-large-bold text-content-neutral-strong">6 sản phẩm</p>
        </div>

        {/* Right: Sort */}
        <div className="flex items-center gap-2">
          <div className="h-10 flex items-center">
            <p className="text-body-regular text-content-neutral">Sắp xếp:</p>
          </div>
          <div className="border border-border-surface rounded-full flex items-center justify-between p-2.5 w-[250px]">
            <p className="text-body-regular text-content-neutral-strong">Được tạo gần đây</p>
            <div className="w-5 h-5">
              <img src={imgDropdown} alt="Dropdown" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Order Cards List (spacing: 73px = ~18.25 x 4 = 292px per card + gap) */}
      <div className="flex flex-col" style={{ gap: '73px' }}>
        {orders.map((order) => (
          <OrderCard
            key={order.id}
            onConfirm={() => console.log('Confirmed:', order.id)}
            onReject={() => console.log('Rejected:', order.id)}
          />
        ))}
      </div>
    </div>
  );
};

