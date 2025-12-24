import React from 'react';

interface Tab {
  id: string;
  label: string;
  count?: number;
}

interface OrderListTabsProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export const OrderListTabs: React.FC<OrderListTabsProps> = ({
  activeTab,
  onTabChange,
}) => {
  const tabs: Tab[] = [
    { id: 'all', label: 'Tất cả' },
    { id: 'pending', label: 'Chờ xác nhận' },
    { id: 'pickup', label: 'Chờ lấy hàng' },
    { id: 'shipping', label: 'Đang vận chuyển' },
    { id: 'delivered', label: 'Đang giao' },
    { id: 'completed', label: 'Hoàn thành' },
    { id: 'cancelled', label: 'Đơn hủy' },
    { id: 'returned', label: 'Trả hàng/Hoàn tiền' },
  ];

  return (
    <div className="mb-5">
      <div className="flex items-center gap-5 overflow-x-auto scrollbar-hide border-b border-border-surface">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`
              relative px-0 py-2.5 whitespace-nowrap
              text-body-medium transition-colors
              ${
                activeTab === tab.id
                  ? 'text-content-primary'
                  : 'text-content-neutral hover:text-content-neutral-strong'
              }
            `}
          >
            <span>{tab.label}</span>
            {tab.count !== undefined && (
              <span className="ml-1.5 text-content-neutral-light">
                ({tab.count})
              </span>
            )}
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-bg-primary" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

