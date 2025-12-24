import React, { useState } from 'react';
import { OrderCard } from '../../components/OrderCard';
import { OrderListSidebar } from './components/OrderListSidebar';
import { OrderListTabs } from './components/OrderListTabs';
import { OrderListFilters } from './components/OrderListFilters';

export const OrderListPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('recent');

  // Sample data - in real app, this would come from API
  const orders = Array(7).fill(null).map((_, i) => ({
    id: `order-${i + 1}`,
    sellerName: "Seller Vi1 store",
    timestamp: "21-11-2025 14:09",
    productTitle: "Hàng hoá 1.5% từ seller Vi1",
    productCondition: "Như mới",
    productDetails: "Annj: Kwjwja, Số lượng: 1",
    price: "500,000 vnđ",
    message: "Sản phẩm này của bạn đã được đặt mua. Hãy xác nhận đơn hàng để bán nhé",
    infoMessage: "Đơn đặt hàng này cần xác nhận. Thời hạn xác nhận: 22-11-2025 02:09",
  }));

  return (
    <div className="min-h-screen bg-bg-canvas">
      {/* Main Container */}
      <div className="max-w-[1440px] mx-auto px-20 py-10">
        <div className="flex gap-10">
          {/* Sidebar */}
          <OrderListSidebar />

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Page Header */}
            <div className="mb-8">
              <div className="bg-bg-surface rounded-lg">
                <div className="px-5 py-4">
                  <h1 className="text-h3-bold text-content-neutral-strong">Đơn bán</h1>
                </div>

                {/* Tabs */}
                <div className="px-5 pb-5">
                  <OrderListTabs 
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                  />

                  {/* Filters */}
                  <OrderListFilters
                    searchQuery={searchQuery}
                    onSearchChange={setSearchQuery}
                    sortBy={sortBy}
                    onSortChange={setSortBy}
                  />
                </div>
              </div>
            </div>

            {/* Results Count & Sort */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-body-large-regular text-content-neutral-strong">
                {orders.length} sản phẩm
              </p>

              <div className="flex items-center gap-2">
                <span className="text-body-regular text-content-neutral">
                  Sắp xếp:
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="
                    px-2.5 py-2 rounded-md
                    border border-border-surface
                    bg-bg-surface
                    text-body-regular text-content-neutral
                    focus:outline-none focus:ring-2 focus:ring-border-primary
                    cursor-pointer
                  "
                >
                  <option value="recent">Được tạo gần đây</option>
                  <option value="oldest">Cũ nhất</option>
                  <option value="price-high">Giá cao nhất</option>
                  <option value="price-low">Giá thấp nhất</option>
                </select>
              </div>
            </div>

            {/* Order Cards List */}
            <div className="space-y-8">
              {orders.map((order) => (
                <OrderCard
                  key={order.id}
                  {...order}
                  onConfirm={() => console.log('Confirmed:', order.id)}
                  onReject={() => console.log('Rejected:', order.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

